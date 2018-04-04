import React, {PureComponent} from 'react'
import {getBatches, addBatch} from '../../actions/batches'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import BatchDetails from './BatchDetails'
import BatchForm from './BatchForm'
import './BatchList.css'

class BatchList extends PureComponent {
  state={
    switcher: 'list'
  }
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
  handleClick = () => {
    this.setState({
      switcher: 'form'
    })
  }
  handleSubmit = (data) => {
    this.props.addBatch(data)
    //Maybe need to be changed later
  }
  handleCancel = (e) => {
    e.preventDefault()
    this.setState({
      switcher: 'list'
    })
  }

  render() {
    const {batches, authenticated} = this.props

    if (!authenticated) return (
			<Redirect to="/login" />
		)

    if (this.props.pass) {
      window.location.reload()
    }

    if (batches === null) return null

    if (this.state.switcher==='list'){
      return (<Paper class="outer-paper">
        <button className='addBatch' onClick={this.handleClick}> add a batch </button>
        <div className='BatchList'>
          {batches.map(batch => this.renderBatch(batch))}
        </div>
      </Paper>)
    }
    else {
      return (
        <Paper class='outer-paper'>
          <h2> Batch: </h2>
          <BatchForm onSubmit={this.handleSubmit}/>
          <p>{ this.props.error && <span style={{color:'red'}}>{this.props.error}</span> }</p>
          <button onClick={this.handleCancel}>Cancel</button>
        </Paper>
      )
    }
  }
}

const mapStateToProps = state => ({
  authenticated: (state.login.user !== null) && (state.login.user !== undefined),
  batches: state.batches === null ?
    null : Object.values(state.batches).sort((a, b) => b.id - a.id),
  pass: state.errors.pass,
  error: state.errors.error
})

export default connect(mapStateToProps, {getBatches, addBatch})(BatchList)
