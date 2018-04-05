import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import Card, {CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import {getBatch} from '../../actions/batches'
import './StudentPage.css'

class StudentPage extends PureComponent {

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

  render() {
    const {student} = this.props
    console.log('---STUDENT----');
    console.log(student)
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
      </Card>
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
  connect(mapStateToProps, {getBatch})(StudentPage)
)
