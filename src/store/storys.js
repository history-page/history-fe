const story = (state = {}, action) => {
  switch (action.type) {
    case 'SET_STORY_LIST':
      return {
        ...state,
        storyList: action.storyList
      }
    case 'SET_STORY_SINGLE':
      return {
        ...state,
        story: action.story
      }
    default:
      return state
  }
}

export default story
