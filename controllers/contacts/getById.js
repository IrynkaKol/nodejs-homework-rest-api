const { getContactById } = require("../../models/contacts");
const { NotFound } = require("http-errors");

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await getContactById(contactId);
  if (!result) {
    throw new NotFound("Not found");
  }
  res.status(200).json(result);
};
module.exports = getById;
