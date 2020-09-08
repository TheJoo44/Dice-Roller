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
      <div className="intro">
        <h2 className="instructions">Instructions</h2>
        <p className="instructions">Enter the total amount of dice you would like the roll.  Then press the roll button to see the total amount of your rolls.</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
