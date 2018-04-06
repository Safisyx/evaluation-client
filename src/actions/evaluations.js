import * as request from 'superagent'
import {baseUrl} from '../constants'
import {ADD_EVALUATION, ADD_EVALUATION_ERROR} from './types'

export const addEvaluation = (studentId, data) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.login.user

  let toSend = {...data}
  if (!data.date) {
    toSend.date=new Date()
  }
  console.log(studentId, toSend);

  request
    .post(`${baseUrl}/evaluations/students/${studentId}`)
    .send(toSend)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: ADD_EVALUATION,
        payload: result.body
      })
    })
    .catch(err => {
    		dispatch({
    			type: ADD_EVALUATION_ERROR,
    			payload: err.response.body.message || 'Error'
    		})
    })
}
