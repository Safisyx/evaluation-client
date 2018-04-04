import React, {PureComponent} from 'react'
import {getBatches} from '../../actions/batches'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import BatchDetails from './BatchDetails'
import './BatchList.css'

class BatchList extends PureComponent {
  componentWillMount() {
    if (this.props.authenticated) {
      if (this.props.batches === null) this.props.getBatches()
    }
  }

  renderBatch = (batch) => {
    return (
      <BatchDetails
        key={batch.id}
        batch={batch}
      />
    )
  }

  render() {
    const {batches, authenticated} = this.props

    if (!authenticated) return (
			<Redirect to="/login" />
		)

    if (batches === null) return null

    return (<Paper class="outer-paper">
      <div className='BatchList'>
        {batches.map(batch => this.renderBatch(batch))}
      </div>
    </Paper>)
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  batches: state.batches === null ?
    null : Object.values(state.batches).sort((a, b) => b.id - a.id)
})

export default connect(mapStateToProps, {getBatches})(BatchList)
