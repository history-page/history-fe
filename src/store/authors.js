const authors = (state = {}, action) => {
  switch (action.type) {
    case 'SET_AUTHORS_LIST':
      return {
        ...state,
        authorList: action.authorList
      }
    default:
      return state
  }
}

export default authors
