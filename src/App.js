import React from 'react';
import './App.css'; 
import Header from './components/Header';
import InputPart from './components/InputPart';
import WeatherPart from './components/WeatherPart';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <InputPart />
      <WeatherPart />
    </div>
  );
}

export default App;
