const { updateContact } = require("../../models/contacts");

const updateById = async (req, res) => {
  
  if (!req.body) {
    res.status(400).json({ message: "missing fields" });
  }
  const { contactId } = req.params;
  const result = await updateContact(contactId, req.body);
  res.status(200).json(result);
};

module.exports = updateById;
