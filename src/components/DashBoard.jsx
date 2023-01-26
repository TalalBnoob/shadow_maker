import { Slider, Switch, Button, Alert } from '@mui/material'
import { MuiColorInput } from 'mui-color-input'

const DashBoard = ({ props, handleChange, handleColor, handleInset, shadow, copy, reset }) => {
	return (
		<div className="dashboard">
			<div className="container">
				<div className="control">
					<div className="rightBox">
						<h3>X-offset</h3>
						<Slider
							name="x_offset"
							value={props.x_offset}
							aria-label="Default"
							valueLabelDisplay="auto"
							onChange={handleChange}
							min={-100}
							max={100}
						/>
						<h3>Y-offset</h3>
						<Slider
							name="y_offset"
							value={props.y_offset}
							aria-label="Default"
							valueLabelDisplay="auto"
							onChange={handleChange}
							min={-100}
							max={100}
						/>
						<h3>Shadow Color</h3>
						<MuiColorInput
							name="color"
							format="rgb"
							value={props.color}
							onChange={handleColor}
							variant="standard"
						/>
					</div>
					<div className="leftBox">
						<h3>Blur</h3>
						<Slider
							name="blur"
							value={props.blur}
							aria-label="Default"
							valueLabelDisplay="auto"
							onChange={handleChange}
						/>
						<h3>Spread</h3>
						<Slider
							name="spread"
							value={props.spread}
							aria-label="Default"
							valueLabelDisplay="auto"
							onChange={handleChange}
						/>
						<h3 className="last">Inset</h3>
						<Switch value={props.inset} onChange={handleInset} />
					</div>
				</div>
				<div className="btn">
					<Button
						id="css-1rwt2y5-MuiButtonBase-root-MuiButton-root"
						onClick={copy}
						variant="outlined"
					>
						box-shadow: {shadow};
					</Button>
					<Button
						id="css-1e6y48t-MuiButtonBase-root-MuiButton-root"
						onClick={reset}
						variant="text"
					>
						Reset
					</Button>
				</div>
			</div>
		</div>
	)
}

export default DashBoard
