// const mongoose = require('mongoose');

// const publicationSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: [true, 'Title is required'],
//     },
//     image: {
//         type: String,
//         requiredrequired: [true, 'Image is required'],
//     },
//     description: {
//         type: String,
//         requiredrequired: [true, 'Description is required'],
//         //enum: ['yes','no'],
//         //maxLength: 100,
//         //minLength: 12,
//     },
//     author: {
//         type: mongoose.Types.ObjectId,
//         ref: 'User',
//     },
//     shares: [{
//         type: mongoose.Types.ObjectId,
//         ref: 'User',
//     }],
// });

// const Publication = mongoose.model('Publication', publicationSchema);

// module.exports = Publication