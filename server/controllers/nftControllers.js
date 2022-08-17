const Nft = require('../models/NftModel')
const mongoose = require('mongoose')
const User = require('../models/UserModel')
const uploadNft = async (req, res) => {
    let { name, info, description, price, pic, userData } = req.body;
    price = Number(price)
    const userInfo = JSON.parse(userData)
    const creator = userInfo._id
    try {
        let post = await Nft.create({ name, info, description, price, pic, creator })

        res.json({ post })
    } catch (err) {

        res.status(203)
    }
}

const catalogNft = async (req, res) => {

    const nftList = await Nft.find()
    res.json(nftList)
}
const detailsNft = async (req, res) => {

    const nftId = req.params.id

    const data = await Nft.findById(nftId)
    console.log(data)
    res.json(data)
}
const editNft = async (req, res) => {

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
        }
    })
    res.json('welldone')
}
const deleteNft = async (req, res) => {

    const nftId = req.params.id
    Nft.findByIdAndDelete(nftId, function (err, docs) {
        if (err) {
            console.log(err)
        } else {
            console.log("Deleted: " + docs)
        }
    })
    res.status = 200
    res.json('Nft deleted successfully')
}

const likeNft = async (req, res) => {
    console.log('like starting:')
    const [user, creator] = req.params.usernames.split('=')
    const nftId = req.params.id

    const nftData = await Nft.findOne({ _id: nftId }).lean()
    console.log(nftData.likes)
    if (nftData.likes.includes(user)) {
        const responce = await Nft.findOneAndUpdate({ _id: nftId }, { $pull: { likes: user } }).lean();
        res.status = 200
        res.json(responce)

    } else {
        const responce = await Nft.findOneAndUpdate({ _id: nftId }, { $push: { likes: user } }).lean();
        res.status = 200
        res.json(responce)
    }

}
const ownNft = async (req, res) => {
    console.log('own starts:')
    const [user, creator] = req.params.usernames.split('=')
    const nftId = req.params.id
    const nftUrl = req.body.picUrl.toString()

    const userData = await User.findOne({ username: user }).lean()
    const nftData = await Nft.findOne({ _id: nftId }).lean()


    if (userData.ownedNft.includes(nftUrl) && nftData.owners.includes(user)) {
        const responceUser = await User.findOneAndUpdate({ username: user }, { $pull: { ownedNft: nftUrl } }).lean();
        const responceNft = await Nft.findOneAndUpdate({ _id: nftId }, { $pull: { owners: user } }).lean();

        res.status = 200
        res.json('success')
    } else {
        const responceUser = await User.findOneAndUpdate({ username: user }, { $push: { ownedNft: nftUrl } }).lean();
        const responceNft = await Nft.findOneAndUpdate({ _id: nftId }, { $push: { owners: user } }).lean();

        res.status = 200
        res.json('success')
    }
}
module.exports = { uploadNft, catalogNft, detailsNft, editNft, deleteNft, likeNft, ownNft }