const { findByIdAndUpdate, findById } = require('../models/UserModel')
const User = require('../models/UserModel')
const mongoose = require('mongoose')
const getUser = async (req, res) => {

    const userId = req.params.id
    const userData = await User.findOne({ _id: userId })

    if (userData) {
        res.status = 200
        res.json(userData)
    } else {
        res.status = 204
    }
}
const setPictureUser = async (req, res) => {

    if (req.params && req.body) {
        if (req.params.id && req.body.currentUser && req.body.nftUrl) {

            const nftUrl = req.body.nftUrl
            const ownerId = req.params.id
            const currentUser = JSON.parse(req.body.currentUser)

            if (ownerId === currentUser._id) {
                User.findByIdAndUpdate(ownerId, {
                    pic: nftUrl
                }, function (err, docs) {
                    if (err) {
                        console.log(err)
                        res.status = 203
                        res.json()
                    } else {
                        console.log("Updated userData: " + docs);
                        res.status = 200
                        res.json()
                    }
                })
            }
        }
    }
}

const editUser = async (req, res) => {

    try {
        const userId = req.params.id
        let newUsername = req.body.username
        let newEmail = req.body.email
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
        res.json({ message: 'Updating error' })
        res.end()
    }
}
const editBioUser = async (req, res) => {
    try {
        const userId = req.params.id
        const newBio = req.body.editArea
        let changeState = false

        const userData = await User.findById(userId)

        if (newBio !== userData.bio) {
            await User.findByIdAndUpdate(userId, { bio: newBio }).lean();
            changeState = true
            if (changeState === false) {
                res.json()
            } else {
                const newUser = await User.findById(userId)
                res.json(newUser)
            }
        }
    } catch (err) {
        res.json()
    }
}
module.exports = { getUser, setPictureUser, editUser, editBioUser }