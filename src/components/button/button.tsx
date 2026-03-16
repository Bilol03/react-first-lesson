import { useEffect, useState } from 'react'
import './button.css'

export const Button = () => {
	let [counter, setCounter]: any = useState(0)
	const [age] = useState(20)

	const onIncrease = (): any => {
		setCounter((prevCounter: any) => prevCounter + 1)
	}

	const onDecrease = (): any => {
		if (counter > 0) setCounter((prevCounter: any) => prevCounter - 1)
	}

	const onRestart = (): any => {
		return setCounter(0)
	}
	
	useEffect(() => {
		document.title = counter
		console.log('effect')
	})

	return (
		<div>
			<h4>Sizning Yoshingiz: {age}</h4>
			<button onClick={onIncrease}>Increament</button>
			<button onClick={onDecrease}>Decreament</button>
			<button onClick={onRestart}>Restart</button>
			<p>{counter}</p>

			<form>
				<span>Yoshingiz</span>
				<input type="text" />
			</form>
		</div>
	)
}
