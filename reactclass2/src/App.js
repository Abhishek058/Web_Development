
import './App.css';
import NavB from './components/NavB';
import { useState } from 'react';
import State from './components/State';

function App() {
  const [mode, setMode] = useState('light');

  const checkStyle = () => {
    if (mode === "light") {
      setMode('dark');
    } 
    else if(mode === "dark") {
      setMode('light');
    }
  };
  const [modeName, setName]= useState('Dark Mode')
  const checkMode = () => {
    if(modeName == 'Dark Mode'){
      setName('Light Mode');
    }
    else if(modeName == 'Light Mode'){
      setName('Dark Mode');
    }
  };
  return (
    <div className="App">
      <NavB title="Chitkara University" abouttxt = "AboutCU" mode={mode} checkStyle={checkStyle} checkMode={checkMode}/>
      <State />
    </div>
  );
}

export default App;
