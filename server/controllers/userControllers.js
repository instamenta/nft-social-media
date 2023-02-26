const User = require('../models/UserModel')
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');
const decodeToken = require('../utils/decodeToken')

const getUserData = async (req, res) => {
    try {
        const { token } = req.body

        const { username } = await decodeToken(token)
        const user = await User.findOne({ username })
        if (!user) { throw { message: "Invalid" } }
        res.json({ user })
    } catch (err) {
        res.json({ message: 'Invalid' })
    }
}
const registerUser = async (req, res) => {
    try {
        let { username, email, birthday, password } = req.body;
        let salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt)

        const user = await User.create({
            username,
            email,
            birthday,
            password
        })
        const token = await generateToken(user)

        if (user) {
            res.json({
                _id: user._id,
                username: user.username,
                email: user.email,
                birthday: user.birthday,
                pic: user.pic,
                token: token,
            })
        } else {
            res.json({ message: 'Invalid' })
        }
    } catch (err) {
        res.json({ message: 'Invalid' })
    }
}
const authUser = async (req, res) => {
    try {
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
                token: token,
            })
        } else {
            res.json({ message: 'Invalid username or password' })
        }
    } catch (err) {
        res.json({ message: 'Invalid username or password' })
    }
}

module.exports = { registerUser, authUser, getUserData }