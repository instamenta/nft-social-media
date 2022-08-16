const express = require('express');
const { uploadNft, catalogNft, detailsNft, editNft, deleteNft } = require('../controllers/nftControllers');
const router = express.Router()

router.route('/upload').post(uploadNft)
router.route('/catalog').get(catalogNft)
router.route('/catalog/:id').get(detailsNft)
router.route('/catalog/:id/edit').post(editNft)
router.route('/catalog/:id/delete').get(deleteNft)

module.exports = router