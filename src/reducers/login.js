import {USER_LOGIN_SUCCESS, USER_LOGIN_FAILED, USER_LOGOUT} from '../actions/types'
import {sessionStorageJwtKey} from '../constants'

let initialState = {}
try {
  const jwt = sessionStorage.getItem(sessionStorageJwtKey)
  if (jwt) {
    initialState = { user: jwt }
  }
}
catch (e) {
  console.log(`Error retrieving data from local storage`, e)
}

export default (state=initialState, {type,payload}) => {
  switch (type) {
    case USER_LOGIN_SUCCESS:
			return {
        user: payload
      }

    case USER_LOGOUT:
      return {
        user: null
      }

    case USER_LOGIN_FAILED:
      return {
				error: payload
			}
    default:
      return state
  }
}
