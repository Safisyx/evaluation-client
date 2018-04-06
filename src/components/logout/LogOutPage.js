import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {logout} from '../../actions/users'
import {Redirect} from 'react-router-dom'

class LogoutPage extends PureComponent {
	componentWillMount() {
		this.props.logout()
	}

	render() {
		if (!this.props.authenticated) return (
			<Redirect to="/" />
		)

		return (
			<div>
				<h1>Signout...</h1>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	authenticated: (state.login.user !== null) && (state.login.user !== undefined)
})

export default connect(mapStateToProps, {logout})(LogoutPage)
