const { User } = require("../../models/user");

const logout = async(req, res) => {
const{_id} = req.user;
await User.findByIdAndUpdate(_id, {token: ""})

res.json({
    status: "204 No Content"
})
}

module.exports = logout;