const mongoose = require('mongoose');

const { DB_QUERYSTRING } = require('./variables')

exports.dataBase = () => {
    mongoose.connection.on('open', () => console.log('DB is connnected'))

    return mongoose.connect(DB_QUERYSTRING);
}
