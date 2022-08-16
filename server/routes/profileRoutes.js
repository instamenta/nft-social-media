const express = require('express');
const { getUser } = require('../controllers/profileControllers');
const router = express.Router()

router.route('/:id').get(getUser)


module.exports = router