import React from 'react';
import { CovidProvider } from './Context';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <CovidProvider>
        <Home />
      </CovidProvider>
    </div>
  );
}

export default App;
