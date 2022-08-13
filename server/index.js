const mongoose = require('mongoose');
const express = require('express');
const userRoutes = require('./routes/userRoutes')
async function start() {
    const app = express();
    try {
        await mongoose.connect('mongodb://localhost:27017/furniture2');

        console.log('DB Ready');
    } catch (err) {
        console.log('Error connecting to database');
        return process.exit(1);
    }
    
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
  
    app.use('/users', userRoutes)

    app.listen(3031, () => console.log('REST Service started on port 3031'));
}


start();