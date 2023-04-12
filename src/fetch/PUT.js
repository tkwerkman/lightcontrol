import { getContactURL } from '../credentials';
import { getLightState } from './GET';

const url = getContactURL();

export async function toggleLight(num) {
  const current = await getLightState(num);
  const response = await fetch(url + 'lights/' + num + '/state', {
    method: 'PUT',
    body: `{"on":${!current.state.on}}`,
  });
  const responseJSON = await response.json();
}

export async function setCT(num, ct, bri) {
	const response = await fetch(url + 'lights/' + num + '/state', {
		method: 'PUT',
		body: `{"colormode":"ct", "ct":${ct}, "bri":${bri}}`
	})
	const responseJSON = await response.json()
	return responseJSON
}

export async function setXY(num, xyArray, bri) {
	const xy = "["+xyArray.toString()+"]"

	const response = await fetch(url + 'lights/' + num + '/state', {
		method: 'PUT',
		body: `{"colormode":"xy", "xy":${xy}, "bri":${bri}}`
	})
	const responseJSON = await response.json()
	return responseJSON
}
