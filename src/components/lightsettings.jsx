import Button from './button';
import SettingsJSON from '../lightSettings.json';
import { setCT, setXY } from '../fetch/PUT';

export default function LightSettings({ updated, number, style}) {
  return Object.keys(SettingsJSON).map((element) => {
    const onClick = () => {
      const colormode = SettingsJSON[element].colormode;
      if (colormode == 'ct') {
        const response = setCT(number, SettingsJSON[element].ct, SettingsJSON[element].bri)
				.then(updated())
				.catch(console.error);
        return;
      }

      if (colormode == 'xy') {
        const response = setXY(number, SettingsJSON[element].xy, SettingsJSON[element].bri)
				.then(updated())
				.catch(console.error);
        return;
      }
    };

    return (
      <div key={number + 'Setting' + element} className='w-full my-1 text-xs'>
        <Button text={element} style={style} onClick={onClick} />
      </div>
    );
  });
}
