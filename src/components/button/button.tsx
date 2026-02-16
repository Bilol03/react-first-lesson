import { Component } from 'react'
import './button.css'

export class Button extends Component {
	state: any
	constructor(props: any) {
		super(props)
		this.state = {
			counter: 10,
            age: ''
		}
	}

	increaseBtn = () => {
		this.setState((prevState: any) => ({
			counter: (prevState.counter += 1),
		}))
	}
	decreaseBtn = () => {
		this.setState((prevState: any) => ({
			counter: prevState.counter > 0 ? (prevState.counter -= 1) : 0,
		}))
	}
	restartBtn = () => {
		this.setState(() => ({
			counter: 0,
		}))
	}

	onChange = (el: any) => {
        this.setState(( ) => ({
            age:  el.target.value
        }))
	}
	render() {
		return (
			<div>
                <h4>Sizning Yoshingiz: {this.state.age}</h4>
				<button onClick={this.increaseBtn}>Increament</button>
				<button onClick={this.decreaseBtn}>Decreament</button>
				<button onClick={this.restartBtn}>Restart</button>
				<p>{this.state.counter}</p>

				<form>
					<span>Yoshingiz</span>
					<input type="text" onChange={this.onChange} />
				</form>
			</div>
		)
	}
}
