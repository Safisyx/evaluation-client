import {ADD_BATCH_ERROR, ADD_BATCH,
        ADD_STUDENT, ADD_STUDENT_ERROR,
        ADD_EVALUATION, ADD_EVALUATION_ERROR} from '../actions/types'

/*
The state will contain the batches in an object with the ID as key
*/

export default (state = {}, {type, payload}) => {
  switch (type) {
    case ADD_BATCH_ERROR:
      return {
        error: payload
      }
    case ADD_BATCH:
      return {
        pass: 'OK'
      }
    case ADD_STUDENT_ERROR:
      return {
        error:payload
      }
    case ADD_STUDENT:
      return {
        pass: 'OK'
      }
    case ADD_EVALUATION_ERROR:
      return {
        error:payload
      }
    case ADD_EVALUATION:
      return {
        pass: 'OK'
      }
    default:
      return state
  }
}
