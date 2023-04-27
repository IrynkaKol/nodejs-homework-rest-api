const { Schema, model } = require("mongoose");
const {handleMongooseError} = require('../helpers')

const userSchema = new Schema({
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter",
  },
  token: {
    type: String,
    default: null,
  },
  avatarURL: {
    type: String,
    required: true,
  },
  verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    default: "",
    required: [true, 'Verify token is required'],
  },
  
});

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = {
  User
};
