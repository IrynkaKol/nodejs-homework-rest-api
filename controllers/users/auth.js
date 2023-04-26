const bcrypt = require("bcrypt");
const { User } = require("../../models/user");
const { Conflict } = require("http-errors");
const gravatar = require("gravatar");
const { v4 } = require('uuid');
const {sendEmail} = require('../../helpers')
const {BASE_URL} = process.env

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict("Email in use");
  }
  const createHashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const verificationCode = v4();

  const newUser = await User.create({
    ...req.body,
    password: createHashPassword,
    avatarURL,
    verificationCode
  });

  const verifyEmail = {
    to: email, subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/users/register/verify/${verificationCode}">Click verify email</a>` 

  }
  await sendEmail(verifyEmail)

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};

module.exports = register;
