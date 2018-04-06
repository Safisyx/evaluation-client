import * as request from 'superagent'
import {baseUrl} from '../constants'
import {DELETE_STUDENT, ADD_STUDENT, ADD_STUDENT_ERROR, EDIT_STUDENT,
    PICK_STUDENT, AFTER_PICK} from './types'

export const deleteStudent = (id) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.login.user

  request
    .delete(`${baseUrl}/students/${id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: DELETE_STUDENT,
        payload: {
          message:result.body.message,
          id
        }
      })
    })
    .catch(err => console.error(err))
}

export const addStudent = ({name,photo}) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.login.user
  const batchId = state.batch.id

  let photoToSend
  if (!photo)
    photoToSend = 'https://avpn.asia/wp-content/uploads/2015/05/empty_profile.png'
  else
    photoToSend =photo
  request
    .post(`${baseUrl}/students/batches/${batchId}`)
    .send({name,photo:photoToSend})
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: ADD_STUDENT,
        payload: result.body
      })
    })
    .catch(err => {
    		dispatch({
    			type: ADD_STUDENT_ERROR,
    			payload: err.response.body.message || 'Error'
    		})
    })
}

export const editStudent = (id, {name,photo}) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.login.user
  console.log('-------------------------');
  console.log(id, name, photo);
  request
    .patch(`${baseUrl}/students/${id}`)
    .send({name,photo})
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: EDIT_STUDENT,
        payload: result.body
      })
    })
    .catch(err => {
      console.error(err);
    })
}

export const pickStudent = (students) => (dispatch) => {
  request
    .post(`${baseUrl}/students/random`)
    .send(students)
    .then(result => {
      console.log('----------------');
      console.log(result.body);
      dispatch({
        type: PICK_STUDENT,
        payload: result.body
      })
    })
    .catch(err => {
      console.error(err);
    })
}

export const afterPick = () => {
  return {
    type: AFTER_PICK
  }
}
