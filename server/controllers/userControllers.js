const User = require('../models/UserModel')
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');
const registerUser = async (req, res) => {
    const { username, email, birthday, password } = req.body;

    const user = await User.create({
        username,
        email,
        birthday,
        password
    })
    console.log(user)
    if (user) {
        res.status(201).json({
            _id: user._id,
            username: user.username,
            birthday: user.birthday,
            token: generateToken(user._id)
        })
    } else {
        throw new Error('Error with register')
    }
    res.json({
        username,
        email
    })
}
const authUser = async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    const valid = await bcrypt.compare(password, user.password)

    if (user && valid) {
        res.json({
            _id: user._id,
            username: user.username,
            birthday: user.birthday,
            pic: user.pic,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
}

module.exports = { registerUser, authUser }