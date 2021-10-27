import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwitchButton from './components/LightSwitchButton';
import TextRepeaterButton from './components/TextRepeaterButton';

import { useState } from 'react';

import './App.css';

function App() {
  const [light, setLight] = useState('off');
  
  const switchLight = () => setLight((light === "on") ? "off" : "on");
  const dark = (light === 'off') ? 'dark' : '';

  const props = { light, switchLight }
  
  return (
    <div className={`App ${dark}`}>
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton {...props} />
        <TextRepeaterButton />
      </section>
    </div>
  );
}

export default App;
