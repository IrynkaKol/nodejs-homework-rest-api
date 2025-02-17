const Joi = require("joi");

const contactsSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),

  phone: Joi.string().min(5).required(),

  favorite: Joi.boolean(),

  id: Joi.string(),
});

module.exports = contactsSchema;
