const initState = {
  isLoading: false
}

const category = (state = initState, action) => {
  switch (action.type) {
    case 'SET_SYSTEM':
      return {
        ...state,
        ...action.system
      }
    case 'TURN_ON_LOADING':
      return {
        ...state,
        isLoading: true
      }
    case 'TURN_OFF_LOADING':
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}

export default category
