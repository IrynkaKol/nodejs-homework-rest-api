const Contact = require("../../models/contact");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  // console.log(req.query) // в ньому містяться всі параметри пошуку
  const {page = 1, limit = 20} = req.query;
  const skip = (page-1) * limit;

  const result = await Contact.find({ owner }, "", {skip, limit}).populate(
    "owner",
    "email subscription"
  ); // візьме id яке зберегається в полі owner, пійди в колекцію(яка записана в ref), знайде там обєкт з таким id, і вставить його замість owner
res.json(result)
};

module.exports = getAll;
