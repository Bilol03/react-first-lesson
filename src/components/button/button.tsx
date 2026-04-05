import { useCallback, useEffect, useState } from 'react'
import { CounterItem } from '../counter-item/counter-item'
import './button.css'

export const Button = () => {
	let [counter, setCounter]: any = useState(0)
	let [active, setToogle]: any = useState(true)


	const counterGenerate = useCallback((count: number) => {
		return new Array(counter)
			.fill(' ')
			.map((_, idx: any) => `Counter number ${idx + count}`)
	}, [counter])

	const onIncrease = (): any => {
		setCounter((prevCounter: any) => prevCounter + 1)
	}
	const onToogle = (): any => {
		setToogle((prevToogle: any) => (prevToogle = !prevToogle))
	}

	const colors = {
		fontWeight: 'bold',
		color: active ? 'green' : 'red',
	}

	useEffect(() => {
		document.title = counter
	})

	return (
		<div>
			<button onClick={onIncrease}>Increament</button>
			<button onClick={onToogle}>Toogle</button>
			<p style={colors}>Sanoq son: {counter}</p>

			<CounterItem counterGenerate={counterGenerate} />
		</div>
	)
}
