const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const { User } = require("../../models/user");
const { Unauthorized } = require("http-errors");

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
  const token = "fsdfssdfds.sdfaerew.dfdsdfd";
  res.json({
    token,
    user: {
        email,
        subscription: "starter"
    }
  })
};

module.exports = login;
