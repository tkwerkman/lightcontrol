import Button from "./button"

export default function LightInfo({display, style, toggleDisplay, light}) {

	const colormode = light.state.colormode
	let setting
	let backgroundColor

	if (colormode == 'xy') {
		setting = `X: ${light.state.xy[0]}, Y: ${light.state.xy[1]}`
	} else {
		setting = light.state[colormode]
	}

	return (
		<>
			<Button text={display?"Hide":"Show"} style={style} onClick={toggleDisplay} />
			<div hidden={!display} style={style} className="my-2">
				<p>Brightness: {light.state.bri}</p>
				<p>Color Mode: {colormode}</p>
				<p>Setting: {setting}</p>
			</div>
		</>
	
	)
}