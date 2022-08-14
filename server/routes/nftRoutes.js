const express = require('express');
const { uploadNft } = require('../controllers/nftControllers');
const router = express.Router()

router.route('/upload').post(uploadNft)
//router.route('/login').post(authUser)

module.exports = router