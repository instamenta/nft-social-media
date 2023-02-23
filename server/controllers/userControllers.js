const User = require('../models/UserModel')
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');

const registerUser = async (req, res) => {
    let { username, email, birthday, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt)
    let user = await User.create({
        username,
        email,
        birthday,
        password
    })
    if (user) {
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            birthday: user.birthday,
            pic: user.pic,
            token: generateToken(user._id)
        })
    } else {
        throw { message: 'Invalid' }

    }

}
const authUser = async (req, res) => {

    const { username, password } = req.body;
    let user
    if (!username || !password) {
        throw { message: 'Invalid username or password' }
    }
    if (username) {
        user = await User.findOne({ username });
    }
    if (!user) {
        throw { message: 'Invalid username or password' }
    }
    const valid = await bcrypt.compare(password, user.password)

    if (valid) {
        const token = await generateToken(user)

        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            birthday: user.birthday,
            pic: user.pic,
            token: token
        })
    } else {
        throw { message: 'Invalid username or password' }
    }

}



module.exports = { registerUser, authUser }