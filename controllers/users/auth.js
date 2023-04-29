const bcrypt = require("bcrypt");
const { User } = require("../../models/user");
const { Conflict } = require("http-errors");
const gravatar = require("gravatar");
const { v4 } = require('uuid');
const {sendEmail} = require('../../helpers');
const {BASE_URL} = process.env;


const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict("Email in use");
  }
  const createHashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const verificationToken = v4();

  const newUser = await User.create({
    ...req.body,
    password: createHashPassword,
    avatarURL,
    verificationToken
  });

  const verifyEmail = {
    to: email, 
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/users/verify/${verificationToken}">Click verify email</a>` 
   
  }
  try {
    await sendEmail(verifyEmail)
    
  } catch (error) {
    console.log(error.message);
  }

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};

module.exports = register;
