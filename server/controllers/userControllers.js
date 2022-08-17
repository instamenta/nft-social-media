const User = require('../models/UserModel')
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');
const registerUser = async (req, res) => {

    let { username, email, birthday, password } = req.body;
    const salt = await bcrypt.genSalt(10);

    if (password) {
        password = await bcrypt.hash(password, salt)
    }
    let user
    try {
        user = await User.create({
            username,
            email,
            birthday,
            password
        })
        console.log(user)
    } catch (err) {
        res.status(203)
        console.log('Error with register')
    }
    if (user) {
        res.status(201).json({
            _id: user._id,
            username: user.username,
            birthday: user.birthday,
            token: generateToken(user._id)
        })
    } else {
        res.status(203)
        console.log('Error with register')
    }

}
const authUser = async (req, res) => {
    const { username, password } = req.body;
    let user

    if (username) {
        user = await User.findOne({ username });
    }
    if (user) {
        const valid = await bcrypt.compare(password, user.password)

        console.log(valid)

        if (user && valid) {
            const token = await generateToken(user)

            res.cookie('accessToken', token, {
                httpOnly: true,
            })
            res.json({
                _id: user._id,
                username: user.username,
                birthday: user.birthday,
                pic: user.pic,
                token: token
            })
        } else {
            res.status(203) 
        }


    } else {
        res.status(203)
        console.log('Invalid username or password')
    }
}

module.exports = { registerUser, authUser }