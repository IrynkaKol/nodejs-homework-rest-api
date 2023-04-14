const express = require("express");
const {valiadation} = require('../../middlewares');
const {registerSchema, loginSchema, updateSubscriptionSchema} = require("../../schemas");
const {ctrlWrapper, authenticate, isValidUserId, updateSubscriptionValidation} = require('../../middlewares');
const {users: ctrl} = require("../../controllers");

const router = express.Router();

router.post("/register", valiadation(registerSchema), ctrlWrapper(ctrl.register));

router.post("/login", valiadation(loginSchema), ctrlWrapper(ctrl.login));

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

router.post("/logout", authenticate, ctrlWrapper(ctrl.logout));

router.patch("/:userId/subscription", authenticate, isValidUserId, updateSubscriptionValidation(updateSubscriptionSchema), ctrlWrapper(ctrl.updateSubscription))


module.exports = router;