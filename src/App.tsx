import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reac
        </a>
        <div>
          <button onClick={() => setCounter(c => c + 1)}>Increment {counter}</button>
        </div>
      </header>
    </div>
  );
}

export default App;
