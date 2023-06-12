import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0);
  const plusOne = () => {
    setValue(value + 1);
  };
  const minusOne = () => {
    setValue(value - 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{value}</p>
        <p id="btn_group">
          <button onClick={plusOne}>+</button>
          <button onClick={minusOne}>-</button>
        </p>
      </header>
    </div>
  );
}

export default App;
