const User = require('../models/UserModel')
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');
const registerUser = async (req, res) => {
    let { username, email, birthday, password } = req.body;
    const salt = await bcrypt.genSalt(10);

    if (password < 25 && password > 6) {
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
    } catch (err) {
        res.status(203)
        res.end()
    }
    if (user) {
        res.status(200).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            birthday: user.birthday,
            pic: user.pic,
            token: generateToken(user._id)
        })
    } else {
        res.status(203)
        res.end()
    }

}
const authUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        let user
        if (!username || !password) {
            throw {
                message: 'Invalid username or password'
            }
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

            res.cookie('accessToken', token, {
                httpOnly: true,
            })

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

    } catch (error) {
        res.status = 203
        res.json(error)
    }

}

module.exports = { registerUser, authUser }