// const jwt = require('jsonwebtoken')
// const { COOKIE_SESSION_NAME } = require('../config/variables')
// const { SECRET } = require('../config/variables')

// exports.isAuth = (req, res, next) => {
//     if(!req.user) {
//         res.redirect('/err')
//     }
//     next();
// }

// exports.isGuest = (req, res, next) => {
//     if(req.user) {
//         res.redirect('/err')
//     }
//     next();
// }