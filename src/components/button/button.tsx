import { Component } from 'react'
import './button.css'

// export function Button() {
//     return <div>
//         <button >Submit</button>
//         <p>0</p>
//     </div>
// }

export class Button extends Component {
	constructor(props: any) {
		super(props)
		this.state = {
			counter: 10,
		}
	}

    increaseBtn = () => {
        this.setState(prevState => ({
            counter: prevState.counter += 1
        }))
    }
    decreaseBtn = () => {
        this.setState(prevState => ({
            counter: prevState.counter > 0 ? prevState.counter -= 1 : 0
        }))
    }
    restartBtn = () => {
        this.setState(prevState => ({
            counter: 0
        }))
    }
	render() {
		return (
			<div>
				<button  onClick={this.increaseBtn}>Increament</button>
				<button onClick={this.decreaseBtn}>Decreament</button>
				<button onClick={this.restartBtn}>Restart</button>
				<p>{this.state.counter}</p>
			</div>
		)
	}
}
