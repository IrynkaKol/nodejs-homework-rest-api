const { NotFound } = require("http-errors");
const Contact = require("../../models/contact");

const removeById = async (req, res) => {
  const {_id: owner } = req.user;
  const { contactId } = req.params;
  const result = await Contact.findOneAndRemove({_id: contactId, owner});
  
  if (!result) {
    throw new NotFound("Not found");
  }
  res.status(200).json({
    message: "contact deleted",
  });
};
module.exports = removeById;
