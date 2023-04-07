const Contact = require("../../models/contact");

const updateById = async (req, res) => {
  if (!req.body) {
    res.status(400).json({ message: "missing fields" });
  }

  const { contactId } = req.params;

  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  res.status(200).json(result);
};

module.exports = updateById;
