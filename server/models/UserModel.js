const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 16,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 8,
    },
    birthday: {
        type: String,
        required: true,
        minlength: 9,
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
    },
    pic: {
        type: String,
        default: "https://d1don5jg7yw08.cloudfront.net/800x800/nft-images/20210609/Anonymous_Binance_1623204341980.png"
    },
    bio: {
        type: String,
        default: "In NFT we trust!"
    },
    ownedNft: [
        {
            type: String,
        }
    ],
    likedNft: [
        {
            type: String,
        }
    ]
})
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.matchPasword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}
const User = mongoose.model('User', userSchema);

module.exports = User;