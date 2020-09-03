import React from 'react';
import D4 from './D4';
import D6 from './D6';
import D8 from './D8';
import D10 from './D10';
import D12 from './D12';
import D20 from './D20';
import D100 from './D100';

function DiceGrid() {
  return (
    <div className="dice-grid">
      <D4 />
      <D6 />
      <D8 />
      <D10 />
      <D12 />
      <D20 />
      <D100 />
    </div>
  )
}

export default DiceGrid