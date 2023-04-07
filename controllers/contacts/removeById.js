const { NotFound } = require("http-errors");
const Contact = require("../../models/contact");

const removeById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw new NotFound("Not found");
  }
  res.status(200).json({
    message: "contact deleted",
  });
};
module.exports = removeById;
