const contactsSchema = require('./contact');
const updateContactsSchema = require('./updateContact');
const updateFavoriteSchema = require('./updateFavoriteSchema');
const registerSchema = require('./register');
const loginSchema = require('./login');
const updateSubscriptionSchema = require('./updateSubscriptionSchema');
const emailSchema = require('./emailSchema');

module.exports = {
    contactsSchema,
    updateContactsSchema,
    updateFavoriteSchema,
    registerSchema,
    loginSchema,
    updateSubscriptionSchema,
    emailSchema
};