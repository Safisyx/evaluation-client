import React, {PureComponent} from 'react'
import './EvaluationForm.css'

export default class EvaluationForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
    alert('submit')
		this.props.onSubmit({...this.state, code: this.props.bColor})
	}

  saveNext = (e) => {
    e.preventDefault()
    alert('BAKOBAKOB')
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
			<form className='EvaluationForm' onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor='startDate'>date</label>
					<input type='date' name='date' id='date' value={
						this.state.date || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor='remark'>{"Remark"}</label>
					<textarea cols={50} rows={5} name='remark' id='remark' value={
						this.state.remark || ''
					} onChange={ this.handleChange } />
				</div>
        <div className='save-next'>
				  <button type='submit' style={{backgroundColor: this.props.bColor}}>Save</button>
          <button onClick={this.saveNext} style={{backgroundColor: this.props.bColor}}> Save&Next </button>
        </div>
			</form>
		)
	}
}
