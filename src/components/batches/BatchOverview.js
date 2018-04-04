import React, {PureComponent} from 'react'
import {getBatch} from '../../actions/batches'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import './BatchOverview.css'

class BatchOverview extends PureComponent {

  componentWillMount() {
    if (this.props.authenticated) {
      this.props.getBatch(this.props.match.params.id)
    }
  }

  render() {
    const {batch, authenticated} = this.props

    if (!authenticated) return (
			<Redirect to="/login" />
		)

    if (this.props.pass) {
      window.location.reload()
    }

    if (batch === null) return null
    return null

  }
}

const mapStateToProps = state => ({
  authenticated: (state.login.user !== null) && (state.login.user !== undefined),
  batch: state.batch
})

export default connect(mapStateToProps, {getBatch})(BatchOverview)
