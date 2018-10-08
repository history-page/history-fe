const { database } = require('./init')
const ClassDaoStorys = require('../dao/StoryList')
const ClassDaoStoryId = require('../dao/StoryId')
const ClassDaoCategorys = require('../dao/CategoryList')
const ClassDaoAuthors = require('../dao/AuthorList')

// -=-=--=-=-= storys -=-=-=-=-=-=
const fetchStoryList = () => {
  const ref = database
    .ref('Storys/')
    .orderByChild(`status`)
    .equalTo('PUBLISHED')

  const dao = new ClassDaoStorys(database, ref)
  return dao.once()
}

const fetchStoryById = id => {
  const dao = new ClassDaoStoryId(database)
  return dao.once(id)
}

// -=-=--=-=-= category -=-=-=-=-=-=
const fetchCategoryList = () => {
  const dao = new ClassDaoCategorys(database)
  return dao.once()
}

// -=-=--=-=-= author -=-=-=-=-=-=
const fetchAuthorList = () => {
  const dao = new ClassDaoAuthors(database)
  return dao.once()
}

module.exports = {
  fetchStoryList,
  fetchStoryById,
  fetchCategoryList,
  fetchAuthorList
}
