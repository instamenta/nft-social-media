const express = require('express');
const { getUser, setPictureUser, editUser} = require('../controllers/profileControllers');

const router = express.Router()

router.route('/:id').get(getUser)
router.route('/:id/select-profile-picture').post(setPictureUser)

router.route('/:id/edit').post(editUser)

module.exports = router