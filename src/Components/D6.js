import React, { useState, useEffect } from 'react';

function D6() {
  const [score, setScore] = useState(0);
  const [value, changeValue] = useState(1);
  useEffect(() => { }, []);

  const changed = () => {
    let inputValue = document.getElementById('howMany6').value;
    changeValue(inputValue)
  }

  const calculateTotalScore = () => {
    let i = 1;
    let totalRoll = 0;

    while (i <= value) {
      totalRoll = totalRoll + (Math.floor(Math.random() * 6) + 1);
      i++
    }

    setScore(totalRoll)
  }

  return (
    <div className="D">
      <p className="die">D6</p>
      <p className="x">x</p>
      <p className="total-dice">Total Dice: </p>
      <input type="number" id="howMany6" className="dice-count" onChange={() => changed()} />
      <button type="button" className="score-button" onClick={calculateTotalScore}>Roll Your D6</button>
      <p className="score">Score: {score}</p>
    </div>
  )
}

export default D6 