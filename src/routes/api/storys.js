const router = require('express').Router()
const firebaseAdmin = require('../../lib/firebaseAdmin')
const { CACHE_MAX_AGE } = require('../../lib/constant/system')
const memoize = require('memoizee')

const cacheFetchStoryList = memoize(firebaseAdmin.fetchStoryList, { maxAge: CACHE_MAX_AGE })
const cacheFetchStoryById = memoize(firebaseAdmin.fetchStoryById, { maxAge: 1 })

const storySchemaPlus = ['data', 'rawContent']
const storySchema = [
  'author',
  'categorys',
  'description',
  'coverUrl',
  'createdAt',
  'status',
  'title',
  'updatedAt',
  'id',
  'name'
]

const storyModel = (storyItem = {}, options = []) => {
  if (!storyItem) return {}

  const obj = {}
  for (const key of storySchema) {
    if (storyItem[key]) obj[key] = storyItem[key]
  }

  const { source = [] } = options
  const additionalSchema = source.filter(item => storySchemaPlus.includes(item)) || []

  for (const key of additionalSchema) {
    if (storyItem[key]) obj[key] = storyItem[key]
  }

  return obj
}
const storyListModel = (storyList = [], options = []) => {
  if (!storyList) return []

  return storyList.map(item => storyModel(item, options))
}

router.get('/', async function(req, res) {
  try {
    const { categoryId, source } = req.query
    const _data = await cacheFetchStoryList()
    let data = storyListModel(_data, { source })

    if (categoryId) {
      data = data.filter(item => {
        return item.categorys.map(({ id }) => id).includes(categoryId)
      })
    }

    res.json(data.reverse())
  } catch (err) {
    console.error(err)
    res.status(500).json(err)
  }
})

router.get('/:storyId', async function(req, res) {
  try {
    const { storyId } = req.params
    if (!storyId) throw new Error('Given null storyId')
    const data = await cacheFetchStoryById(storyId)
    res.json(storyModel(data, { source: ['data', 'rawContent'] }))
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
