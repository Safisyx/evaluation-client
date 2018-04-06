import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import Card, {CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import {afterPick} from '../../actions/students'
import './StudentPick.css'

class StudentPick extends PureComponent {

  handleClick = () => {
    this.props.afterPick()
  }
  render() {
    const {student} = this.props

    return (
      <div className='BigCard' onClick={this.handleClick}>
      <Card className="StudentPick">
        <div className='image-container'>
            <img className='image' src={`${student.photo}`} alt="" />
        </div>
        <CardContent className='name-container'>
          <Typography variant="headline" component="h2">
            {student.name}
          </Typography>
        </CardContent>
      </Card>
      </div>
    )
  }
}

export default withRouter(
  connect(null,{afterPick})(StudentPick)
)
