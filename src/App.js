import React from 'react';
import Header from './Components/Header'
import DiceGrid from './Components/DiceGrid'
import Footer from './Components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <DiceGrid />
      <Footer />
    </div>
  );
}

export default App;
