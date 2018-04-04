import {GET_BATCHES} from '../actions/types'

/*
The state will contain the batches in an object with the ID as key
*/

export default (state = null, {type, payload}) => {
  switch (type) {
    case GET_BATCHES:
    return payload.reduce((batches, batch) => {
      batches[batch.id] = batch
      return batches
    }, {})

    default:
      return state
  }
}
