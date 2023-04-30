const register = require('./auth');
const login = require('./login');
const getCurrent = require('./getCurrent');
const logout = require('./logout');
const updateSubscription = require('./updateSubscription');
const updateAvatar = require('./updateAvatar');
const sizeAvatar = require('./sizeAvatar');
const verifyEmail = require('./verifyEmail');
const resendVerifyEmail = require('./resendVerifyEmail');

module.exports = {
    register,
    login,
    getCurrent,
    logout,
    updateSubscription,
    updateAvatar,
    sizeAvatar,
    verifyEmail,
    resendVerifyEmail
}