const {User} = require('../../models/user');


const register = async(req, res) => {
const newUser = await User.create(req.body ) // передали логін та пароль из body (зареєстрували)
res.json({
    email: newUser.email
})
}


module.exports = register;
