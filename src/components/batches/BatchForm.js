import React, {PureComponent} from 'react'
import './BatchForm.css'

export default class BatchForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
		console.log(this.state);
  }

	render() {
		return (
			<form className='LoginForm' onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor='id'>Id</label>
					<input type='number' name='id' id='id' value={
						this.state.id || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor='startDate'>{"Start Date"}</label>
					<input type='date' name='startDate' id='startDate' value={
						this.state.startDate || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor='endDate'>{"End Date"}</label>
					<input type='date' name='endDate' id='endDate' value={
						this.state.endDate || ''
					} onChange={ this.handleChange } />
				</div>

				<button type='submit'>Add</button>
			</form>
		)
	}
}
