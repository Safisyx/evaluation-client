import {GET_BATCH, DELETE_STUDENT, ADD_STUDENT, EDIT_STUDENT, ADD_EVALUATION} from '../actions/types'

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

    case ADD_EVALUATION:
    console.log('---ADD_EVALUATION---');
    console.log(payload);
      if (payload.post) {
        return {
          ...state,
          students: state.students.map(student => {
            if (student.id===payload.post.studentId) {
              return {
                ...student,
                evaluations: student.evaluations.concat(payload.post)
              }
            }
            return student
          })
        }
      }
      return {
        ...state,
        students: state.students.map(student => {
          if (student.id===payload.patch.studentId) {
            return {
              ...student,
              evaluations: student.evaluations.map(evaluation => {
                if (evaluation.id===payload.patch.id)
                  return payload.patch
                return evaluation
              })
            }
          }
          return student
        })
      }

    default:
      return state
  }
}
