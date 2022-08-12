const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/UserModel');


const blacklist = new Set();

const JWT_SECRET = 't gcsergcserg  b920n3w4pc[w3tcawert6v9';

export async function register(username, email, password) {
    // check if email is taken
    // const existing = await User.findOne({ email: new RegExp(`^${email}$`, 'i') });

    // if (existing) {
    //     throw new Error('Email is taken');
    // }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // store user
    const user = new User({
        username,
        email,
        hashedPassword,

    });

    await user.save();

    return createSession(user);
}

export async function login(email, password) {
    // check if user exists
    const user = await User.findOne({ email: new RegExp(`^${email}$`, 'i') });

    if (!user) {
        throw new Error('Incorrect email or password');
    }

    // verify password
    const match = await bcrypt.compare(password, user.hashedPassword);

    if (!match) {
        throw new Error('Incorrect email or password');
    }

    return createSession(user);
}

function createSession(user) {
    const payload = {
        email: user.email,
        _id: user._id
    };

    const accessToken = jwt.sign(payload, JWT_SECRET);

    return {
        email: user.email,
        accessToken,
        _id: user._id
    };
}

export const validateToken = (token) => {
    if (blacklist.has(token)) {
        throw new Error('Token is blacklisted');
    }
    return jwt.verify(token, JWT_SECRET);
}
