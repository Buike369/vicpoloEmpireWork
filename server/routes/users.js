const express = require('express')
const router = express.Router()
const { getAllUser  } = require("../controllers/users.js")


router.get('/user-info', getAllUser);


module.exports = router