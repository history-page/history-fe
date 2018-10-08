const router = require('express').Router()
const firebaseAdmin = require('../../lib/firebaseAdmin')
const { CACHE_MAX_AGE } = require('../../lib/constant/system')
const memoize = require('memoizee')
const cacheFetchAuthorList = memoize(firebaseAdmin.fetchAuthorList, { maxAge: CACHE_MAX_AGE })

router.get('/', async function(req, res) {
  try {
    const data = await cacheFetchAuthorList()
    res.json(data)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
