const { Unauthorized } = require("http-errors");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  const { autorization = " " } = req.headers;
  const [bearer, token] = autorization.split(" ");
  if (bearer !== "Bearer") {
    next(Unauthorized(401));
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user) {
      next(Unauthorized(401));
    }
    next();
  } catch {
    next(Unauthorized(401));
  }
};
module.exports = authenticate;
