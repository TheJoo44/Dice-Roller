import React, { useState } from 'react';


function Roller() {
  const [score, setScore] = useState(0)

  return (
    <div>
      {score}
    </div>
  )
}

export default Roller