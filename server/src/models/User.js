const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
    },
    email: {
        type: String,
        required: [true, 'E-mail is required'],
        unique: true,  
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    birthDay: {
        type: String,
        required: [true, 'Birthday is required'],
    },
    // publications: [{
    //     type: mongoose.Types.ObjectId,
    //     ref: "Publication"
    // }],
});

userSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hashedPassword => {
            this.password = hashedPassword;
            next();
        })
});

const User = mongoose.model('User', userSchema);

module.exports = User;