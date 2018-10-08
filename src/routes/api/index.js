const router = require('express').Router()
const { normalize } = require('../middleware/normalize')

router.use(normalize)
router.use('/storys', require('./storys'))
router.use('/categorys', require('./categorys'))
router.use('/authors', require('./authors'))

module.exports = router
