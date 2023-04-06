const express = require("express");
const {valiadation, ctrlWrapper, updateValiadation} = require('../../middlewares');
const {contactsSchema} = require('../../schemas');
const {updateContactsSchema} = require('../../schemas')


const { contacts: ctrl } = require("../../controllers");
const validateMiddleware = valiadation(contactsSchema)

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", ctrlWrapper(ctrl.getById));

router.post("/", validateMiddleware, ctrlWrapper(ctrl.add));

router.delete("/:contactId", ctrlWrapper(ctrl.removeById));

router.put("/:contactId", updateValiadation(updateContactsSchema), ctrlWrapper(ctrl.updateById));

module.exports = router;
