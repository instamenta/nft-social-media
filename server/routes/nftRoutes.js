const express = require('express');
const { uploadNft, catalogNft } = require('../controllers/nftControllers');
const router = express.Router()

router.route('/upload').post(uploadNft)
router.route('/catalog').get(catalogNft)
//router.route('/login').post(authUser)

module.exports = router