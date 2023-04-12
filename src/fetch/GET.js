import { getContactURL } from "../credentials";

const url = getContactURL();

export async function getAllLightInfo() {
	const response = await fetch(url + 'lights/', {
		method: 'GET'
	})
	const json = await response.json()
	return json
} 

export async function getLightState(num) {
  const response = await fetch(url + 'lights/' + num, {
    method: 'GET',
  });
  const currentState = await response.json();
  return currentState;
}
