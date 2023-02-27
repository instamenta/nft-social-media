const express = require('express');
const { getUser, editUserPicture, editUserData, editUserBio} = require('../controllers/profileControllers');

const router = express.Router()

router.route('/:id').get(getUser)
router.route('/:id/edit-user-picture').post(editUserPicture)

router.route('/:id/edit-user-data').post(editUserData)
router.route('/:id/edit-user-bio').post(editUserBio)

module.exports = router