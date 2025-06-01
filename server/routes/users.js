const express = require('express')
const router = express.Router()
const { authenticate, adminOnly } = require('../middleware/authMiddleware');
const { getAllUser, emailSubscription  } = require("../controllers/users.js")


router.get('/user-info', authenticate, adminOnly, getAllUser);
router.post('/email-subscription', emailSubscription );


module.exports = router