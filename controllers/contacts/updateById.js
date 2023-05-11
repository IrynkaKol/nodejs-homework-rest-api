const Contact = require("../../models/contact");

const updateById = async (req, res) => {
  const { _id: owner } = req.user;
  if (!req.body) {
    res.status(400).json({ message: "missing fields" });
  }

  const { contactId } = req.params;

  const result = await Contact.findOneAndUpdate(
    { _id: contactId, owner },
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(result);
};

module.exports = updateById;
