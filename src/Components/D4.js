import React, { useState, useEffect } from 'react';

function D4() {
  const [score, setScore] = useState(0);
  const [value, changeValue] = useState(1);
  useEffect(() => { }, []);

  const changed = () => {
    let inputValue = document.getElementById('howMany4').value
    changeValue(inputValue)
  }

  const calculateTotalScore = () => {
    let i = 1;
    let totalRoll = 0;

    while (i <= value) {
      let roll = Math.floor(Math.random() * 4) + 1;
      totalRoll = totalRoll + roll;
      i++
    }

    setScore(totalRoll)
  }

  return (
    <div className="D">
      <p className="die">D4</p>
      <p className="x">x</p>
      <p className="total-dice">Total Dice: </p>
      <input type="number" className="dice-count" onChange={() => changed()} id="howMany4" />
      <button type="button" className="score-button" onClick={calculateTotalScore}>Roll Your D4</button>
      <p className="score">Score: {score}</p>
    </div>
  )
}

export default D4