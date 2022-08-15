const mongoose = require('mongoose')

const nftSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 16,
    },
    info: {
        type: String,
        required: true,
        minlength: 3,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    pic: {
        type: String,
        required: true,
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    owners: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    ],
    likes: [
        
    ]
})


const Nft = mongoose.model('Nft', nftSchema);

module.exports = Nft;