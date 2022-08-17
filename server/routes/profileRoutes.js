const express = require('express');
const { getUser, setPictureUser} = require('../controllers/profileControllers');
const router = express.Router()

router.route('/:id').get(getUser)
router.route('/:id/select-profile-picture').post(setPictureUser)


module.exports = router