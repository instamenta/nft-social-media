const Nft = require('../models/NftModel')
const User = require('../models/UserModel')
const mongoose = require('mongoose')

const getUser = async (req, res) => {

    const userId = req.params.id
    console.log(userId)

    const userData = await User.findOne({_id: userId})
    console.log(userData)
    if(userData) {
        res.status = 200
        res.json(userData)
    } else {
        res.status = 204
    }
}

module.exports = { getUser }