const express = require('express');
const { getUser, setPictureUser, editUser, editBioUser} = require('../controllers/profileControllers');

const router = express.Router()

router.route('/:id').get(getUser)
router.route('/:id/select-profile-picture').post(setPictureUser)

router.route('/:id/edit').post(editUser)
router.route('/:id/edit-bio').post(editBioUser)

module.exports = router