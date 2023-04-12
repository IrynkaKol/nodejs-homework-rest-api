const express = require("express");
const {valiadation} = require('../../middlewares');
const {registerSchema} = require("../../schemas");
const {ctrlWrapper} = require('../../middlewares');
const {users: ctrl} = require("../../controllers");

const router = express.Router();

router.post("/register", valiadation(registerSchema), ctrlWrapper(ctrl.register))

module.exports = router;