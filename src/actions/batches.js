import * as request from 'superagent'
import {baseUrl} from '../constants'

import {GET_BATCHES, ADD_BATCH, ADD_BATCH_ERROR, GET_BATCH} from './types'

export const getBatches = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.login.user

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

export const addBatch = (data) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.login.user

  request
    .post(`${baseUrl}/batches`)
    .send(data)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: ADD_BATCH,
        payload: result.body
      })
    })
    .catch(err => {
    		dispatch({
    			type: ADD_BATCH_ERROR,
    			payload: err.response.body.message || 'Error'
    		})
    })
}

export const getBatch = (batchId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.login.user

  request
		.get(`${baseUrl}/batches/${batchId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: GET_BATCH,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}
