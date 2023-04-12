const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const { User } = require("../../models/user");
const { Unauthorized } = require("http-errors");

const {SECRET_KEY} = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }); // перевіряємо чи є користувач з такою поштою
  if (!user) {
    throw new Unauthorized("Email or password is wrong");
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw new Unauthorized("Email or password is wrong");
  }

  const payload = {
    id: user._id,
  }
  const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "23h"});
  res.json({
    token,
    user: {
        email: user.email,
        subscription: user.subscription,
    }
  })
};

module.exports = login;
