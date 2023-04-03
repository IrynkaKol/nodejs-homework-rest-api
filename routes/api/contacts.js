const express = require("express");
const {valiadation, ctrlWrapper} = require('../../middlewares');
const {contactsSchema} = require('../../schemas')


const { contacts: ctrl } = require("../../controllers");
const validateMiddleware = valiadation(contactsSchema)

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", ctrlWrapper(ctrl.getById));

router.post("/", validateMiddleware, ctrlWrapper(ctrl.add));

router.delete("/:contactId", ctrlWrapper(ctrl.removeById));

router.put("/:contactId", valiadation(contactsSchema), ctrlWrapper(ctrl.updateById));

module.exports = router;
