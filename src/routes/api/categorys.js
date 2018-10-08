const router = require('express').Router()
const firebaseAdmin = require('../../lib/firebaseAdmin')
const { CACHE_MAX_AGE } = require('../../lib/constant/system')
const memoize = require('memoizee')
const cacheFetchCategoryList = memoize(firebaseAdmin.fetchCategoryList, { maxAge: CACHE_MAX_AGE })

router.get('/', async function(req, res) {
  try {
    const data = await cacheFetchCategoryList()
    res.json(data)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
