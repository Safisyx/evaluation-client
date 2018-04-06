import React, {PureComponent} from 'react'
import {withRouter} from 'react-router'
import './TopBar.css'

class TopBar extends PureComponent {
	render() {
    const {history,location} = this.props
		return (
      <header className="App-header">
        <img src='/favicon.png' alt='logo'/>
        <h1 className="App-title">Student Evaluation Tool</h1>
        {
          location.pathname.indexOf('login') <= 0 &&
          <button onClick={()=>history.push('/logout')} id='logout'> Log out </button>
        }
      </header>
		)
	}
}

export default withRouter (TopBar)
