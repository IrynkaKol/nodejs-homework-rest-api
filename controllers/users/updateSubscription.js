const { User } = require("../../models/user");

const updateSubscription = async (req, res) => {
  if (!req.body) {
    res.status(400).json({ message: "missing fields subscription" });
  }
  const { subscriotion } = req.body;
  const { userId } = req.params;

  const result = await User.findByIdAndUpdate(userId, req.body, {
    new: subscriotion,
  });
  res.status(200).json(result);
};

module.exports = updateSubscription;
