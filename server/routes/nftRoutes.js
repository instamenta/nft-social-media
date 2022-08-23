const express = require('express');
const { 
    uploadNft, 
    catalogNft, 
    detailsNft, 
    editNft, 
    deleteNft, 
    likeNft, 
    ownNft, 
    latestNft, 
    mostWantedNft 
} = require('../controllers/nftControllers');

const router = express.Router()

router.route('/upload').post(uploadNft)
router.route('/catalog').get(catalogNft)

router.route('/catalog/most-wanted').get(mostWantedNft)
router.route('/catalog/most-wanted/:count').get(latestNft)

router.route('/catalog/:id').get(detailsNft)
router.route('/catalog/:id/edit').post(editNft)
router.route('/catalog/:id/delete').get(deleteNft)

router.route('/like/:id/:usernames').post(likeNft)
router.route('/own/:id/:usernames').post(ownNft)

module.exports = router