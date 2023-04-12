import React, { useEffect, useState } from 'react';
import LightControl from './components/lightcontrol';

import { getContactURL } from './credentials';
import { getAllLightInfo } from './fetch/GET';


export default function Main() {

  const [lightState, setLightState] = useState({});
	const [counter, setCounter] = useState(0)
	
	const incrementCounter = () => {
		const newCounter = counter + 1
		setCounter(newCounter)
	}
  useEffect(() => {
    const fetchLightState = async () => {
      const lightState = await getAllLightInfo();
      setLightState(lightState);
    };

    fetchLightState();
  }, [counter]);

  return (
    <>
      <div className='flex w-screen h-screen justify-center pt-10 bg-slate-900 text-white'>
        <LightControl updated={incrementCounter} number={3} light={lightState['3']} />
        <LightControl updated={incrementCounter} number={4} light={lightState['4']} />
        <LightControl updated={incrementCounter} number={5} light={lightState['5']} />
      </div>
    </>
  );
}
