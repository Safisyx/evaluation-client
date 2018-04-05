import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import Card, {CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import {deleteStudent} from '../../actions/students'
import './StudentCard.css'

class StudentCard extends PureComponent {


  handleClick = () => {
    if (this.props.remove) {
      alert(this.props.student.id)
      this.props.deleteStudent(this.props.student.id)
      this.props.change()
      //window.location.reload()
    } else if (this.props.pick) {
      alert(this.props.student.id)
      console.log('EDIT');
      this.props.afterPick(this.props.student.id)
    }
    else
      alert("NOPE")
  }
  render() {
    const {student} = this.props
    //console.log(student);
    const evLength=student.evaluations.length
    //console.log(evLength);
    const bColor = evLength===0? 'inherit' : student.evaluations[evLength-1].code

    return (
      <Card className="StudentCard">
        <div className='image-container'>
            <a onClick={this.handleClick}>
              <img className='image' src={`${student.photo}`} alt="" />
            </a>
        </div>
        <CardContent className='name-container'>
          <Typography variant="headline" component="h2">
            <a onClick={this.handleClick} className='student-name'>{student.name}</a>
          </Typography>
        </CardContent>
          <div className={`code bColor-${bColor}`}>
          </div>
      </Card>
    )
  }
}

export default withRouter(
  connect(null, {deleteStudent})(StudentCard)
)
