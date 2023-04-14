const {isValidObjectId} = require('mongoose');
const {HttpError} = require("../helpers");

const isValidUserId = (req, res, next) => {
    const {userId} = req.params;
    if(!isValidObjectId(userId)) {
        next(HttpError(400, "Not found"))
    }
    next();
}

module.exports = isValidUserId