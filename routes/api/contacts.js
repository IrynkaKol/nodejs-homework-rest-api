const express = require("express");
const {
  valiadation,
  ctrlWrapper,
  updateValiadation,
  isValidId,
  updateFavoriteValiadation,
  authenticate,
} = require("../../middlewares");
const { contactsSchema } = require("../../schemas");
const { updateContactsSchema } = require("../../schemas");
const { updateFavoriteSchema } = require("../../schemas");
const { contacts: ctrl } = require("../../controllers");

const validateMiddleware = valiadation(contactsSchema);

const router = express.Router();

router.get("/", authenticate, ctrlWrapper(ctrl.getAll));

router.get("/:contactId", authenticate, isValidId, ctrlWrapper(ctrl.getById));

router.post("/", authenticate, validateMiddleware, ctrlWrapper(ctrl.add));

router.delete(
  "/:contactId",
  authenticate,
  isValidId,
  ctrlWrapper(ctrl.removeById)
);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  updateValiadation(updateContactsSchema),
  ctrlWrapper(ctrl.updateById)
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  updateFavoriteValiadation(updateFavoriteSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

module.exports = router;
