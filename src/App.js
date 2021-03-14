import React from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Flights from './components/Flights';

function App() {
  return (
    <div className="App">
      <Header title="Viajero Flight Search"></Header>
      <Flights></Flights>
      <Footer title="2021"></Footer>
    </div>
  );
}

export default App;
