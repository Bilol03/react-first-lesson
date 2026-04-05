import { useEffect, useState } from 'react'

export const CounterItem = ({ counterGenerate }: any) => {
	const [item, setItem] = useState([])

	useEffect(() => {
		const newItem = counterGenerate(0)
		setItem(newItem)
	}, [counterGenerate])
	return (
		<div>
			<ul>
				{item.map((item: any) => (
					<li>Counter Generated: {item} </li>
				))}
			</ul>
		</div>
	)
}
