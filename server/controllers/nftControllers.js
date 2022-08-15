const Nft = require('../models/NftModel')
const mongoose = require('mongoose')

const uploadNft = async (req, res) => {
    let { name, info, description, price, pic, _id } = req.body;
    price = Number(price)
    console.log(typeof(price))
    const creator = mongoose.Types.ObjectId(_id)
    try {
        let post = await Nft.create({name, info, description, price, pic, creator})
        console.log(post)
        res.json({post})
    } catch (err) {
        console.log(err)
        res.status(203) 
    }
}

const catalogNft = async (req, res) => {
    
    const nftList = await Nft.find()

    res.json(nftList)
}
module.exports = { uploadNft, catalogNft }