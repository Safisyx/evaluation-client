import {PICK_STUDENT, AFTER_PICK} from '../actions/types'

export default (state = null, {type, payload}) => {
  switch (type) {
    case PICK_STUDENT:
      return payload
    case AFTER_PICK:
      return null
    default:
      return state
  }
}
