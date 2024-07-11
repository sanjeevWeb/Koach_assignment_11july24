const { translateText, test } = require('../controllers/text.controller')

const router = require('express').Router()


router.route('/')
    .get(test)

router.route('/')
    .post(translateText)


module.exports = router