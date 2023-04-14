const register = require('./auth');
const login = require('./login');
const getCurrent = require('./getCurrent');
const logout = require('./logout');
const updateSubscription = require('./updateSubscription')

module.exports = {
    register,
    login,
    getCurrent,
    logout,
    updateSubscription
}