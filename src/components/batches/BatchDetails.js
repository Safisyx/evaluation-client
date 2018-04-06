import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import './BatchDetails.css'

class BatchDetails extends PureComponent {
  render() {
    const {batch} = this.props
    console.log(this.props.match);

    return (
      <Card className="batch-card" onClick={()=>(this.props.history.push(`/batches/${batch.id}`))}>
        <CardContent>
          <Typography variant="headline" component="h2">
            Batch #{batch.id}
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
