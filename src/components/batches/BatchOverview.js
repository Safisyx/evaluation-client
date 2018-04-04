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
  divStyle = (number)=> {
    const w=Math.round(number)*6
    console.log(w);
    return {
      width:`${w}px`
    }
  }
  render() {
    const {authenticated,batch} = this.props
    if (!batch.colorsPercentage) return "loading.."
    const colorsPercentage = batch.colorsPercentage
    console.log(colorsPercentage);
    if (!authenticated) return (
			<Redirect to="/login" />
		)

    return (
      <div className='BatchOverview'>
        <div className='Progress'>
          <div id='green' style={this.divStyle(colorsPercentage.green)}>
            <p>{`${colorsPercentage.green}%`}</p>
          </div>
          <div id='yellow' style={this.divStyle(colorsPercentage.yellow)}>
            <p>{`${colorsPercentage.yellow}%`}</p>
          </div>
          <div id='red' style={this.divStyle(colorsPercentage.red)}>
            <p>{`${colorsPercentage.red}%`}</p>
          </div>
        </div>

        <div className='students'>
        </div>
      </div>
    )
    }
  }

const mapStateToProps = state => ({
  authenticated: (state.login.user !== null) && (state.login.user !== undefined),
  batch: state.batch
})

export default connect(mapStateToProps, {getBatch})(BatchOverview)
