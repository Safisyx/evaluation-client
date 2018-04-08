import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import Card from 'material-ui/Card'
import {getBatch} from '../../actions/batches'
import {Redirect} from 'react-router-dom'
import {addEvaluation} from '../../actions/evaluations'
import EvaluationForm from './EvaluationForm'
import './StudentPage.css'

class StudentPage extends PureComponent {
  state= {
    color : 'inherit'
  }
  componentWillMount() {
    if (this.props.authenticated) {
      this.props.getBatch(this.props.match.params.batchId)
      //Because like that no need to sort the array of evaluations
    }
  }

  renderColor = (e) => {
    return (
      <div key={e.id} className={`studentPage-color studentPage-color-${e.code}`}/>
    )
  }

  green = () => {
    this.setState(
      {
        color: 'green'
      }
    )
  }
  yellow = () => {
    this.setState(
      {
        color: 'yellow'
      }
    )
  }
  red = () => {
    this.setState(
      {
        color: 'red'
      }
    )
  }


  handleSubmit = (next,data) => {
    console.log(next,data);
    if (data.code && (data.code==='green'|| data.code==='yellow'|| data.code==='red')){
      if((data.code==='red' || (data.code==='yellow')) && (!data.remark))
        alert('Change not saved because you need to fill in the remark for that color')
      else
        this.props.addEvaluation(this.props.student.id,data)
    }
    if (!next)
      this.props.history.push(`/batches/${this.props.match.params.batchId}`)
    else {
      const students=this.props.batch.students
      const studentIndex=students.indexOf(this.props.student)
      //console.log(studentIndex);

      let nextStudent=studentIndex+1
      if (studentIndex===students.length-1)
        nextStudent = 0
      this.setState({color:'inherit'})
      this.props.history.push(`/batches/${this.props.match.params.batchId}/students/${students[nextStudent].id}`)
    }

  }
  render() {
    const {student, authenticated} = this.props
  //  console.log('---STUDENT----');
  //  console.log(student)

    if (!authenticated) return (
			<Redirect to="/login" />
		)

    if (!student) return "loading"

    return (
      <div className="StudentPage">
      <Card className="bigCard">
        <div className='studentPage-imgContainer'>
           <img className='image' src={`${student.photo}`} alt="" />
        </div>
        <div className='studentPage-details'>
          <h2 id='studentPage-name'>{student.name}</h2>
          <p id='studentPage-batch'>Batch #{student.batchId}</p>
          <div className='colors-container'>
            {
              student.evaluations.map(e=>this.renderColor(e))
            }
          </div>
        </div>

        <div className='colors-buttons'>
          <p> Evaluation</p>
          <div id='button-green' onClick={this.green}/>
          <div id='button-yellow' onClick={this.yellow}/>
          <div id='button-red' onClick={this.red}/>
        </div>

        <div className='evaluation-container'>
          <EvaluationForm bColor={this.state.color}
           onSubmit={this.handleSubmit}/>
        </div>
      </Card>
      <p>{ this.props.error && <span style={{color:'red'}}>{this.props.error}</span> }</p>
      </div>
    )
  }
}

const mapStateToProps = (state,props) => {
  // console.log('----STATE');
  // console.log(state.batch.students);
  // if (state.batch.id){
  //   const ss= state.batch.students
  //   //console.log('guhijmncgdsfdtfyguhlj;');
  //   console.log(props.match);
  //   console.log(ss.find(s=>`${s.id}`===props.match.params.studentId));
  // }
  return {
  authenticated: (state.login.user !== null) && (state.login.user !== undefined),
  batch: state.batch,
  error: state.errors.error,
  student: state.batch.id && state.batch.students.find(student => `${student.id}`===props.match.params.studentId),
}}

export default withRouter(
  connect(mapStateToProps, {getBatch, addEvaluation})(StudentPage)
)
