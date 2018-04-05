import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import Card, {CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import './StudentCard.css'

class StudentCard extends PureComponent {

  render() {
    const {student} = this.props
    console.log(student);
    const evLength=student.evaluations.length
    console.log(evLength);
    const bColor = evLength===0? 'inherit' : student.evaluations[evLength-1].code

    return (
      <Card className="StudentCard">
        <div className='image-container'>
            <img className='image' src={`${student.photo}`} alt="" />
        </div>
        <CardContent className='name-container'>
          <Typography variant="headline" component="h2">
            {student.name}
          </Typography>
        </CardContent>
          <button className={`code bColor-${bColor}`} onClick={()=>(alert('sweet'))}>
            View
          </button>
      </Card>
    )
  }
}

export default withRouter(
  connect(null)(StudentCard)
)
