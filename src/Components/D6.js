import React, { useState, useEffect } from 'react';

function D6(props) {
  const [score, setScore] = useState(0);
  const [value, changeValue] = useState();
  useEffect(() => { console.log("Die", document.getElementById('howMany').value) }, []);

  const changed = () => {
    let inputValue = document.getElementById('howMany').value
    changeValue(inputValue)
  }

  return (
    <div className="D6">
      <p className="die">D6</p>
      <p className="x">x</p>
      <p>Total Dice: <input type="number" className="total-dice" name="totalDice" onChange={() => changed()} id="howMany" /></p>
      <button type="button" className="score-button" onClick={() => setScore(Math.ceil(Math.random() * 6) * value)}>Roll Your D6</button>
      <p className="score">Score: {score}</p>
    </div>
  )
}

export default D6 