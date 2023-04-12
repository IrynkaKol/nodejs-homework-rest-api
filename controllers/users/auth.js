const {User} = require('../../models/user');


const register = async(req, res) => {
const newUser = await User.create(req.body ) // передали логін та пароль из body (зареєстрували)
res.status(201).json({
    user: {
        email: newUser.email,
        subscription: "starter"}
    
})
}


module.exports = register;
