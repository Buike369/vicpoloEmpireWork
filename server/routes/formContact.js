const express = require('express')
const router = express.Router()
const { formSubmit } = require("../controllers/contactFormPost.js")


router.post('/contact-us', formSubmit);


module.exports = router