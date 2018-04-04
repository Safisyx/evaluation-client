import {USER_LOGIN_SUCCESS, USER_LOGOUT} from './actions/types'
import {sessionStorageJwtKey} from './constants'

export const storeJwt = store => next => action => {
  try {
    if (action.type === USER_LOGIN_SUCCESS) {
      sessionStorage.setItem(sessionStorageJwtKey, action.payload.jwt)
    }
    if (action.type === USER_LOGOUT) {
      sessionStorage.removeItem(sessionStorageJwtKey)
    }
  }
  catch (e) {
    console.log(`Interaction with LocalStorage went wrong`, e)
  }

  next(action)
}
