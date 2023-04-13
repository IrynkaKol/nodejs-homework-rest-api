// створемо мангус модель

const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false, // якщо не передали це поле
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
}); // вимоги до обєкту

const Contact = model("contact", contactSchema); // створили модель це клас, який буде працювати з колекцією contact

module.exports = Contact;
