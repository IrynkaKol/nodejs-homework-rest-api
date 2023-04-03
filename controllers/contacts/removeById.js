const { NotFound } = require("http-errors");
const { removeContact } = require("../../models/contacts");

const removeById = async (req, res) => {
  const { contactId } = req.params;
  const result = await removeContact(contactId);
  if (!result) {
    throw new NotFound("Not found");
  }
  res.status(200).json({
    message: "contact deleted",
  });
};
module.exports = removeById;
