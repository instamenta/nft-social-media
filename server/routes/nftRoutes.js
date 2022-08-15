const express = require('express');
const { uploadNft, catalogNft, detailsNft } = require('../controllers/nftControllers');
const router = express.Router()

router.route('/upload').post(uploadNft)
router.route('/catalog').get(catalogNft)
router.route('/catalog/:id').get(detailsNft)
//router.route('/login').post(authUser)

module.exports = router