import { ADD_RIVAL, AUTH, LOADPOSTS, LOAD_USER, REMOVE_PAY, REMOVE_RIVAL, REMOVE_TARIFF, SUBSCRIBE } from './types'

export const signin = status => {
  return {
    type: AUTH,
    payload: status
  }
}

export const subscribe = status => {
  return {
    type: SUBSCRIBE,
    payload: status
  }
}

export const loadPostsAction = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: LOADPOSTS })
    },3000)
  }
}

export const loadUsersAction = user => {
  return {
    type: LOAD_USER,
    payload: user
  }
}

export const addRivalAction = id => {
  return {
    type: ADD_RIVAL,
    payload: id
  }
}

export const removeRivalAction = id => {
  return {
    type: REMOVE_RIVAL,
    payload: id
  }
}

export const removeTariffAction = () => {
  return {
    type: REMOVE_TARIFF
  }
}

export const removePayAction = title => {
  return {
    type: REMOVE_PAY,
    payload: title
  }
}