const express = require("express");
const {valiadation} = require('../../middlewares');
const {registerSchema, loginSchema, updateSubscriptionSchema, emailSchema} = require("../../schemas");
const {ctrlWrapper, authenticate, isValidUserId, updateSubscriptionValidation, upload} = require('../../middlewares');
const {users: ctrl} = require("../../controllers");

const router = express.Router();

router.post("/register", valiadation(registerSchema), ctrlWrapper(ctrl.register));

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));

router.post('/verify', valiadation(emailSchema), ctrlWrapper(ctrl.resendVerifyEmail))

router.post("/login", valiadation(loginSchema), ctrlWrapper(ctrl.login));

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

router.post("/logout", authenticate, ctrlWrapper(ctrl.logout));

router.patch("/:userId/subscription", authenticate, isValidUserId, updateSubscriptionValidation(updateSubscriptionSchema), ctrlWrapper(ctrl.updateSubscription))

router.patch("/avatars", authenticate, upload.single('avatar'), ctrlWrapper(ctrl.updateAvatar))

module.exports = router;