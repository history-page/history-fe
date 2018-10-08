const category = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CATEGORYS_LIST':
      return {
        ...state,
        categoryList: action.categoryList
      }
    default:
      return state
  }
}

export default category
