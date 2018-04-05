import {GET_BATCH, DELETE_STUDENT} from '../actions/types'

export default (state = {}, {type, payload}) => {
  switch (type) {
    case GET_BATCH:
      return payload

    case DELETE_STUDENT:
      return state.filter(student => student.id !== payload.id)
      
    default:
      return state
  }
}
