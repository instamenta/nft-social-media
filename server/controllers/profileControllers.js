const User = require('../models/UserModel')
const mongoose = require('mongoose')

const getUser = async (req, res) => {

    const userId = req.params.id
    const userData = await User.findOne({_id: userId})

    if(userData) {
        res.status = 200
        res.json(userData)
    } else {
        res.status = 204
    }
}
const setPictureUser = async (req, res) => {

    if(req.params && req.body) {
        if(req.params.id && req.body.currentUser && req.body.nftUrl) {

            const nftUrl = req.body.nftUrl
            const ownerId = req.params.id
            const currentUser = JSON.parse(req.body.currentUser)

            if(ownerId === currentUser._id) {
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
module.exports = { getUser, setPictureUser }