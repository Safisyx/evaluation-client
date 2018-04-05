import * as request from 'superagent'
import {baseUrl} from '../constants'
import {DELETE_STUDENT} from './types'

export const deleteStudent = (id) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.login.user

  request
    .delete(`${baseUrl}/students/${id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: DELETE_STUDENT,
        payload: result.body.message
      })
    })
    .catch(err => console.error(err))
}
