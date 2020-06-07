import React from 'react';
import './App.css';
import GettingLocation from './components/GettingLocation';
import Description from './components/Description';
import MapContainer from './components/MapContainer'


function App() {
  return (
    <div className="App">
      <Description />
      <GettingLocation />
      
    </div>
  );
}

export default App;
