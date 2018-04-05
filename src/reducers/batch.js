import {GET_BATCH, DELETE_STUDENT, ADD_STUDENT} from '../actions/types'

export default (state = {}, {type, payload}) => {
  switch (type) {
    case GET_BATCH:
      return payload

    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter(student => student.id !== payload.id)
      }
    case ADD_STUDENT:
      console.log('----ADD_STUDENT-----');
      console.log(payload);
      return {
        ...state,
        students: state.students.concat(payload)
      }
    default:
      return state
  }
}
