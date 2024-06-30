import React from 'react';

function App() {
  let Counter=50
  const Increment=()=>{
    Counter=Counter+1
  }
  return (
    <>
      <h1>02 Counter</h1>
      <h3>Counter value:{Counter}</h3>
      <button onClick={Increment}>Increment</button>
      <br/>
      <button>Decrement</button>
    </>
  );
}

export default App;
