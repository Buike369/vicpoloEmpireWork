const express = require('express')
const router = express.Router()
const {register, login, passwordReset } = require("../controllers/auth.js")


router.post('/register', register);
router.post('/login', login);
router.post('/passwordReset', passwordReset);


module.exports = router