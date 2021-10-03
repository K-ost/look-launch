import { ADD_RIVAL, AUTH, LOADPOSTS, LOAD_USER, REMOVE_PAY, REMOVE_RIVAL, REMOVE_TARIFF, SUBSCRIBE } from './types'

const initialState = {
  auth: false,
  loadposts: false,
  subscribed: false,
  user: []
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
    case REMOVE_TARIFF:
      return { ...state, user: { ...state.user, tariff: null } }
    case REMOVE_PAY:
      return { ...state, user: { ...state.user, pay: state.user.pay.filter(item => item.name !== action.payload) } }
    default: return state
  }
}