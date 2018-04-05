import {GET_BATCH, DELETE_STUDENT, ADD_STUDENT, EDIT_STUDENT} from '../actions/types'

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
    case EDIT_STUDENT:
    console.log('----EDIT_STUDENT-----');
    console.log(payload);
      return {
        ...state,
        students: state.students.map(student => {
          if (student.id===payload.id)
            return payload
          return student
        })
      }
    default:
      return state
  }
}
