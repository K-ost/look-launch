import { ADD_RIVAL, AUTH, LOADPOSTS, LOAD_USER, REMOVE_RIVAL, SUBSCRIBE } from './types'

const initialState = {
  auth: false,
  loadposts: false,
  subscribed: false,
  user: {
    rivals: []
  }
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return { ...state, auth: action.payload }
    case LOADPOSTS:
      return { ...state, loadposts: true }
    case SUBSCRIBE:
      return { ...state, subscribed: action.payload }
    case LOAD_USER:
      return { ...state, user: action.payload }
    case ADD_RIVAL:
      return { ...state, user: { ...state.user, rivals: state.user.rivals.concat([action.payload]) } }
    case REMOVE_RIVAL:
      return { ...state, user: { ...state.user, rivals: state.user.rivals.filter(item => item !== action.payload) } }
    default: return state
  }
}