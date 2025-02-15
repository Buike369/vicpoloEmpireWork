const express = require('express')
const router = express.Router()
const { authenticate, adminOnly } = require('../middleware/authMiddleware');
const { getAllUser  } = require("../controllers/users.js")


router.get('/user-info', authenticate, adminOnly, getAllUser);


module.exports = router