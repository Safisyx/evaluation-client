import {PICK_STUDENT} from '../actions/types'

export default (state = null, {type, payload}) => {
  switch (type) {
    case PICK_STUDENT:
      return payload
    default:
      return state
  }
}
