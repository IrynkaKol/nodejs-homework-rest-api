const Contact = require("../../models/contact");
const { NotFound } = require("http-errors");

const getById = async (req, res) => {
  const {_id: owner } = req.user;
  const { contactId } = req.params;
  console.log(req.params)
  const result = await Contact.findOne({_id: contactId, owner});
  
    
  if (!result) {
    throw new NotFound("Not found");
  }
 
  res.status(200).json(result);
  
};
module.exports = getById;
