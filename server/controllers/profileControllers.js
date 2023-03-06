const User = require('../models/UserModel')

const getUser = async (req, res) => {
    try {
        const userId = req.params.id
        const userData = await User.findOne({ _id: userId })

        if (userData) {
            res.status = 200
            res.json(userData)
        } else {
            res.json({ message: "Invalid" })
        }
    } catch (err) {
        res.json({ message: "Invalid" })
    }

}
const editUserPicture = async (req, res) => {
    try {
        const nftUrl = req.body.nftUrl
        const ownerId = req.params.id
        const currentUser = req.body.auth

        if (ownerId === currentUser._id) {
            User.findByIdAndUpdate(ownerId, {
                pic: nftUrl
            }, function (err, docs) {
                if (err) {
                    console.log(err)
                    res.json({ message: "Invalid" })
                } else {
                    console.log("Updated userData: " + docs);
                    res.json(currentUser)
                }
            })
        }
    } catch (err) {
        res.json({ message: "Invalid" })
    }
}

const editUserData = async (req, res) => {
    try {
        const userId = req.params.id
        const newUsername = req.body.username
        const newEmail = req.body.email
        let changeState = false

        const userData = await User.findById(userId)

        if (newUsername !== userData.username) {
            await User.findByIdAndUpdate(userId, { username: newUsername }).lean();
            changeState = true
        }

        if (newEmail !== userData.email) {
            await User.findByIdAndUpdate(userId, { email: newEmail }).lean();
            changeState = true
        }
        if (changeState === false) {
            res.json({ message: 'Nothing to update' })
        } else {
            const newUser = await User.findById(userId)
            res.json(newUser)
        }
    } catch (err) {
        res.json({ message: "Invalid" })
    }
}
const editUserBio = async (req, res) => {
    try {
        const userId = req.params.id
        const newBio = req.body.bio
        let changeState = false

        const userData = await User.findById(userId)
        if (newBio !== userData.bio) {
            await User.findByIdAndUpdate(userId, { bio: newBio }).lean();
            changeState = true
            if (changeState === false) {
                res.json({ message: "No Change" })
            } else {
                const newUser = await User.findById(userId)
                res.json(newUser)
            }
        }
    } catch (err) {
        res.json({ message: "Invalid" })
    }
}
module.exports = { getUser, editUserPicture, editUserData, editUserBio }