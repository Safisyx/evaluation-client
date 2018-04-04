import {ADD_BATCH_ERROR, ADD_BATCH} from '../actions/types'

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

    default:
      return state
  }
}
