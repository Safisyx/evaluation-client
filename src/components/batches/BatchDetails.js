import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import './BatchDetails.css'

class BatchDetails extends PureComponent {
  dateFormat (date) {
    const d = date.split('-')
    return `${d[2]}/${d[1]}/${d[0]}`
  }
  render() {
    const {batch} = this.props
    console.log(this.props.match);

    return (
      <Card className="batch-card" onClick={()=>(this.props.history.push(`/batches/${batch.id}`))}>
        <CardContent>
          <Typography variant="headline" component="h2">
            Batch #{batch.id}
          </Typography>

          <Typography className='dates'>
            {`${this.dateFormat(batch.startDate)} - ${this.dateFormat(batch.endDate)}`}
          </Typography>

          <Typography color="textSecondary">
            Students: {batch.students.length}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default withRouter(
  connect(null)(BatchDetails)
)
