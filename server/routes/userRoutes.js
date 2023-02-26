const express = require('express');
const {registerUser, authUser, getUserData } = require('../controllers/userControllers');

const router = express.Router()

router.route('/register').post(registerUser)
router.route('/login').post(authUser)

router.route('/decode').post(getUserData)
module.exports = router