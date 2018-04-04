import * as request from 'superagent'
import {baseUrl} from '../constants'

import {GET_BATCHES} from './types'

export const getBatches = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.user.jwt
  request
		.get(`${baseUrl}/batches`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: GET_BATCHES,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
  }
