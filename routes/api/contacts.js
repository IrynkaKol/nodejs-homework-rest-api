const express = require("express");
const {valiadation, ctrlWrapper, updateValiadation, isValidId, updateFavoriteValiadation} = require('../../middlewares');
const {contactsSchema} = require('../../schemas');
const {updateContactsSchema} = require('../../schemas');
const {updateFavoriteSchema} = require('../../schemas')



const { contacts: ctrl } = require("../../controllers");
const validateMiddleware = valiadation(contactsSchema)

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", isValidId, ctrlWrapper(ctrl.getById));

router.post("/", validateMiddleware, ctrlWrapper(ctrl.add));

router.delete("/:contactId", isValidId, ctrlWrapper(ctrl.removeById));

router.put("/:contactId", isValidId, updateValiadation(updateContactsSchema), ctrlWrapper(ctrl.updateById));

router.patch("/:contactId/favorite", isValidId, updateFavoriteValiadation(updateFavoriteSchema), ctrlWrapper(ctrl.updateFavorite))

module.exports = router;
