import 'isomorphic-unfetch'

export const fetchConfig = async args => {
  const { req, store } = args
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''

  const { authors, categorys } = store.getState()
  const authorListState =
    authors.authorList && authors.authorList.length > 0 ? authors.authorList : null
  const categoryListState =
    categorys.categoryList && categorys.categoryList.length > 0 ? categorys.categoryList : null

  if (categoryListState && authorListState) {
    return [categoryListState, authorListState]
  }

  return await Promise.all([
    fetch(`${baseUrl}/api/categorys`).then(res => res.json()),
    fetch(`${baseUrl}/api/authors`).then(res => res.json())
  ])
}

export const initStory = (storyItem, categoryList, authorList) => {
  const { author: authorId, categorys: categoryIdList } = storyItem

  const author = authorList.find(authorItem => authorItem.id === authorId)

  const categorys = categoryIdList
    .map(({ id }) => categoryList.find(catItem => catItem.id === id))
    .filter(storyItem => storyItem && storyItem.id)

  return { ...storyItem, author, categorys }
}

// export default initConfig
