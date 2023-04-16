const contactsSchema = require('./contact');
const updateContactsSchema = require('./updateContact');
const updateFavoriteSchema = require('./updateFavoriteSchema');
const registerSchema = require('./register');
const loginSchema = require('./login');
const updateSubscriptionSchema = require('./updateSubscriptionSchema')

module.exports = {
    contactsSchema,
    updateContactsSchema,
    updateFavoriteSchema,
    registerSchema,
    loginSchema,
    updateSubscriptionSchema
};