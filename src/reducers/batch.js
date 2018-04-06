import {GET_BATCH, DELETE_STUDENT, ADD_STUDENT, EDIT_STUDENT, ADD_EVALUATION} from '../actions/types'
import {getLastColors, getColorPercentage} from '../lib/functions'

export default (state = {}, {type, payload}) => {
  let students, lastColors, colorsPercentage
  switch (type) {
    case GET_BATCH:
      return payload

    case DELETE_STUDENT:
      students = state.students.filter(student => student.id !== payload.id)
      lastColors = getLastColors(students)
      colorsPercentage= {
        red: getColorPercentage(lastColors,'red'),
        green: getColorPercentage(lastColors,'green'),
        yellow: getColorPercentage(lastColors,'yellow')
      }
      return {
        ...state,
        students,
        colorsPercentage
      }
    case ADD_STUDENT:
      //console.log('----ADD_STUDENT-----');
      //console.log(payload);
      students = state.students.concat(payload)
      lastColors = getLastColors(students)
      colorsPercentage= {
        red: getColorPercentage(lastColors,'red'),
        green: getColorPercentage(lastColors,'green'),
        yellow: getColorPercentage(lastColors,'yellow')
      }
      return {
        ...state,
        students,
        colorsPercentage
      }
    case EDIT_STUDENT:
  //  console.log('----EDIT_STUDENT-----');
  //  console.log(payload);
      return {
        ...state,
        students: state.students.map(student => {
          if (student.id===payload.id)
            return payload
          return student
        })
      }

    case ADD_EVALUATION:
//      console.log('---ADD_EVALUATION---');
//      console.log(payload);
      if (payload.post) {
        students = state.students.map(student => {
          if (student.id===payload.post.studentId) {
            return {
              ...student,
              evaluations: student.evaluations.concat(payload.post)
            }
          }
          return student
        })
        lastColors = getLastColors(students)
        colorsPercentage= {
          red: getColorPercentage(lastColors,'red'),
          green: getColorPercentage(lastColors,'green'),
          yellow: getColorPercentage(lastColors,'yellow')
        }
        return {
          ...state,
          students,
          colorsPercentage
        }
      }
      students = state.students.map(student => {
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
      lastColors = getLastColors(students)
      colorsPercentage= {
        red: getColorPercentage(lastColors,'red'),
        green: getColorPercentage(lastColors,'green'),
        yellow: getColorPercentage(lastColors,'yellow')
      }
      return {
        ...state,
        students,
        colorsPercentage
      }

    default:
      return state
  }
}
