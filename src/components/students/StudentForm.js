import React, {PureComponent} from 'react'
import './StudentForm.css'

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
					<label htmlFor='name'>Name</label>
					<input type='text' name='name' id='name' value={
						this.state.name || ''
					} onChange={ this.handleChange } />
				</div>

        <div>
					<label htmlFor='photo'>Photo Link</label>
					<input type='text' name='photo' id='photo' value={
						this.state.photo || ''
					} onChange={ this.handleChange } />
				</div>

				<button type='submit'>{this.props.buttonText}</button>
			</form>
		)
	}
}
