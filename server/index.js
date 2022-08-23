const mongoose = require('mongoose');
const express = require('express');

const userRoutes = require('./routes/userRoutes')
const nftRoutes = require('./routes/nftRoutes')
const profileRoutes = require('./routes/profileRoutes')

const cors = require('cors')
const cookieParser = require('cookie-parser')

async function start() {
    const app = express();
    try {
        await mongoose.connect('mongodb://localhost:27017/nft-shop');

        console.log('DB Ready');
    } catch (err) {
        console.log('Error connecting to database');
        return process.exit(1);
    }
    app.use(cors())
    app.use(cookieParser())
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use('/users', userRoutes)
    app.use('/nft', nftRoutes)
    app.use('/profile',profileRoutes)

    app.listen(3031, () => console.log('REST Service started on port 3031'));
}

start();