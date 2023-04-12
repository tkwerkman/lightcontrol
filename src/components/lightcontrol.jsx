import Button from './button'
import LightInfo from './lightinfo';
import LightSettings from './lightsettings';

import { toggleLight } from '../fetch/PUT';
import { useState } from 'react';
import getTheme from '../themes';



export default function LightControl({updated, number, light}) {

	const [showInfo, setShowInfo] = useState(false)
	let theme = ''
	let style = {}

	if (light == undefined) {
		return
	}
	if (light.state.on) {style = getTheme('light')}
	if (light.state.colormode == "ct" && light.state.ct == 500 && light.state.bri == 254) {style = getTheme('warm')}
	if (light.state.colormode == "ct" && light.state.ct == 500 && light.state.bri == 150) {style = getTheme('dimwarm')}
	if (light.state.colormode == "ct" && light.state.ct == 153) {style = getTheme('cold')}
	if (light.state.colormode == "xy" && light.state.xy.toString() == "0.1897,0.0652") {style = getTheme('purple')}
	if (!light.state.on) {style = getTheme('dark')}


	const handleToggleLight = (number) => {
		toggleLight(number)
		.then(() => {updated()})
	}

	return (
		<div
			className="flex flex-col items-center h-fit w-fit m-4 px-4 py-2 border rounded-xl"
			style={style}
		>
			<p>{light.name}</p>
			<div className="w-full mx-4 my-2">
				<Button text={light.state.on?"ON":"OFF"} style={style} onClick={() => handleToggleLight(number)} />
			</div>

			<div hidden={light.state.on?false:true}>
				<LightSettings updated={updated} number={number} style={style} />
			</div>

			<div className="w-full mx-4 my-2">
				<LightInfo display={showInfo} light={light} toggleDisplay={() => setShowInfo(!showInfo)} style={style} />
			</div>
		</div>
	)
}