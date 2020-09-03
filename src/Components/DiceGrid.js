import React from 'react';
import D6 from './D6';
import D4 from './D4';

function DiceGrid() {
  return (
    <div className="dice-grid">
      <D4 />
      <D6 />
    </div>
  )
}

export default DiceGrid