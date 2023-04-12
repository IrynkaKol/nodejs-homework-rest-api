const express = require("express");
const {valiadation} = require('../../middlewares');
const {registerSchema, loginSchema} = require("../../schemas");
const {ctrlWrapper} = require('../../middlewares');
const {users: ctrl} = require("../../controllers");

const router = express.Router();

router.post("/register", valiadation(registerSchema), ctrlWrapper(ctrl.register));
router.post("/login", valiadation(loginSchema), ctrlWrapper(ctrl.login))

module.exports = router;