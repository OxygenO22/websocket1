import React, { useState } from 'react'

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(prev => prev + 1)


  

  return (
    <div>
      <p>Value:</p> 
      <p>{counter}</p>{" "}
      <button onClick={increment}>Increment</button>
    </div>
  );
}

 