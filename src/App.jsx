import { useState } from 'react'
import DashBoard from './components/DashBoard'

function App() {
	const [color, setColor] = useState('rgba(0, 0, 0, 0.35)')
	const [x_offset, setX_offset] = useState(0)
	const [y_offset, setY_offset] = useState(5)
	const [blur, setBlur] = useState(15)
	const [spread, setSpread] = useState(0)
	const [inset, setInset] = useState(false)

	const handleColor = (e) => {
		setColor(e)
	}

	const handleInset = (e) => {
		setInset(e.target.checked)
	}

	const handleChange = (e) => {
		switch (e.target.name) {
			case 'x_offset':
				setX_offset(e.target.value)
				break

			case 'y_offset':
				setY_offset(e.target.value)
				break

			case 'blur':
				setBlur(e.target.value)
				break

			case 'spread':
				setSpread(e.target.value)
				break
		}
	}

	const copy = () => {
		navigator.clipboard.writeText(
			`box-shadow: ${x_offset}px ${y_offset}px ${blur}px ${spread}px ${color}${
				inset ? ' inset' : ''
			};`
		)
	}

	const reset = () => {
		setX_offset(0)
		setY_offset(5)
		setBlur(15)
		setSpread(0)
		setInset(false)
		setColor('rgba(0, 0, 0, 0.35)')
	}

	return (
		<div className="app">
			<div className="notification"></div>
			<div className="window">
				<div
					className="box"
					style={{
						boxShadow: `${x_offset}px ${y_offset}px ${blur}px ${spread}px ${color}${
							inset ? ' inset' : ''
						}`,
					}}
				></div>
			</div>
			<DashBoard
				props={{ x_offset, y_offset, blur, spread, color, inset }}
				handleChange={handleChange}
				handleColor={handleColor}
				handleInset={handleInset}
				reset={reset}
				shadow={`${x_offset}px ${y_offset}px ${blur}px ${spread}px ${color}${
					inset ? ' inset' : ''
				}`}
				copy={copy}
			/>
		</div>
	)
}

export default App
