import { useState } from 'react'
import { Button } from '../button/button'
import { Field } from '../field/field'
import { Header } from '../header/header'
import './App.css'

function App() {
	let [isDelete, setDelete]: any = useState(false)

	const onDelete = (): any => {
		setDelete((prevState: any) => !prevState)
	}
	return (
		<div className="container">
			{!isDelete && <Header />}
			{!isDelete && <Field />}
			{!isDelete && <Button />}

			<button onClick={onDelete} style={{marginTop: 20}}>Delete</button>
		</div>
	)
}

export default App
