import {GET_BATCH} from '../actions/types'

export default (state = {}, {type, payload}) => {
  switch (type) {
    case GET_BATCH:
      return payload
      
    default:
      return state
  }
}
