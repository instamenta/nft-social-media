const Nft = require('../models/NftModel')
const mongoose = require('mongoose')

const uploadNft = async (req, res) => {
    let { name, info, description, price, pic, _id } = req.body;
    price = Number(price)
    console.log(typeof (price))
    const creator = mongoose.Types.ObjectId(_id)
    try {
        let post = await Nft.create({ name, info, description, price, pic, creator })
        console.log(post)
        res.json({ post })
    } catch (err) {
        console.log(err)
        res.status(203)
    }
}

const catalogNft = async (req, res) => {

    const nftList = await Nft.find()
    res.json(nftList)
}
const detailsNft = async (req, res) => {
    console.log('inthere')
    const nftId = req.params.id

    const data = await Nft.findById(nftId)
    console.log(data)
    res.json(data)
}
const editNft = async (req, res) => {
    console.log('well done')
    const nftId = req.params.id
    const data = req.body

    const user = JSON.parse(req.body.userData)

    Nft.findByIdAndUpdate(nftId, {
        name: data.name,
        info: data.info,
        description: data.description,
        price: data.price,
        pic: data.pic
    }, function (err, docs) {
        if (err) {
            console.log(err)
            res.status = 203
        } else {
            console.log("Updated nft: " + docs);
            res.status = 200
        }})
        res.json('welldone')
}
const deleteNft = async (req, res) => {
    
    const nftId = req.params.id
    console.log(nftId)

    Nft.findByIdAndDelete(nftId, function (err,docs) {
        if(err) {
            console.log(err)
        } else {
            console.log("Deleted: " + docs)
        }
    })
    res.status = 200
    res.json('Nft deleted successfully')
}
module.exports = { uploadNft, catalogNft, detailsNft, editNft, deleteNft}