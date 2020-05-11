import React from 'react';
import './App.css';
import GettingLocation from './components/GettingLocation';
import Description from './components/Description';


function App() {
  return (
    <div className="App">
      <Description />
      <GettingLocation />
    </div>
  );
}

export default App;
