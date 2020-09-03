import React from 'react';

function D6(props) {
  return (
    <div className="D6">
      <p className="die">D6</p>
      <p className="x">x</p>
      <form className="DiceCount">
        <label>
          Total Dice:
          <input type="number" total="total" className="total-dice" />
        </label>
        <input type="submit" value="Roll Your D6" className="roll" />
      </form>
      <p className="score">Score: </p>
    </div>
  )
}

export default D6 