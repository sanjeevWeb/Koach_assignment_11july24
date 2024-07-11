const translateText = require('../controllers/text.controller')

const router = require('express').Router()


router.route('/')
    .post(translateText)


module.exports = router