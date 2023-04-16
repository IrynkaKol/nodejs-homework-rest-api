const bcrypt = require('bcrypt'); 
const { User } = require("../../models/user");
const { Conflict } = require("http-errors");

/*
const createHashPassword = async(password) => {
  // const salt = await bcrypt.genSalt(10)  - набір випадкових символів, цифра (10 наприклад) це складність алгоритмів генерації
  const result = await bcrypt.hash(password, 10);
  const compareResult1 = await bcrypt.compare(password, result) // перевіряє чи є закеширований результат пароля і повертає true якщо є

} */


const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }); // перед тим як зареєструвати дивимось чи є вже користувач з такою поштою
  if (user) {
    throw new Conflict("Email in use");
  }
  const createHashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({...req.body, password: createHashPassword}); // передали логін та пароль из body (зареєстрували)
  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};

module.exports = register;
