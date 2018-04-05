import React, {PureComponent} from 'react'
import {getBatch} from '../../actions/batches'
import {addStudent} from '../../actions/students'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import StudentCard from '../students/StudentCard'
import StudentForm from '../students/StudentForm'
import './BatchOverview.css'

class BatchOverview extends PureComponent {
  state = {
    remove:false,
    add:false
  }
  componentWillMount() {
    if (this.props.authenticated) {
      this.props.getBatch(this.props.match.params.id)
    }
  }
  divStyle = (number)=> {
    const w=Math.round(number)*6
    console.log(w);
    return {
      width:`${w}px`
    }
  }

  stateChange = () => {
    console.log('I am here');
    this.setState(
      {
        add:false,
        remove: false
      }
    )
  }
  renderStudent = (student) => {
    return (
      <StudentCard
        key={student.id}
        student={student}
        change={this.stateChange}
        remove={this.state.remove}
      />
    )
  }

  handleDelete = () =>
  {
    this.setState(
      {
        ...this.state,
        remove: true
      }
    )
  }

  handleSubmit = (data) => {
    this.props.addStudent(data)
    this.stateChange()
  }

  handleAdd = () => {
    this.setState(
      {
        ...this.state,
        add: true
      }
    )
  }

  render() {
    const {authenticated,batch} = this.props
    if (!batch.colorsPercentage) return "loading.."
    const colorsPercentage = batch.colorsPercentage
    const students = batch.students
    console.log(colorsPercentage);
    if (!authenticated) return (
			<Redirect to="/login" />
		)

    if (students.length===0) return 'No student yet'

    if (this.state.add) {
      return (
        <StudentForm onSubmit={this.handleSubmit}/>
      )
    }

    return (

      <div className='BatchOverview'>
        <div className='batch-menu'>
          <button id='add-student' onClick={this.handleAdd}> Add student </button>
          <button id='edit-student'> Edit student </button>
          <button id='delete-student' onClick={this.handleDelete}> Delete student </button>
        </div>
        <p>{ this.props.error && <span style={{color:'red'}}>{this.props.error}</span> }</p>
        <div className='Progress'>
          <div id='green' style={this.divStyle(colorsPercentage.green)}>
            <p>{colorsPercentage.green !==0 && `${colorsPercentage.green}%`}</p>
          </div>
          <div id='yellow' style={this.divStyle(colorsPercentage.yellow)}>
            <p>{colorsPercentage.yellow !==0 && `${colorsPercentage.yellow}%`}</p>
          </div>
          <div id='red' style={this.divStyle(colorsPercentage.red)}>
            <p>{colorsPercentage.red !==0 && `${colorsPercentage.red}%`}</p>
          </div>
        </div>

        <div className='students'>
          {students.map(student => this.renderStudent(student))}
        </div>
      </div>
    )
    }
  }

const mapStateToProps = state => ({
  authenticated: (state.login.user !== null) && (state.login.user !== undefined),
  batch: state.batch,
  error: state.errors.error
})

export default connect(mapStateToProps, {getBatch, addStudent})(BatchOverview)
