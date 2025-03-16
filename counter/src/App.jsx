import React, { useState } from "react";

const App = () => {
  const [counter, setcounter] = useState(15);

  const addValue = () => {
    setcounter(counter + 1);
  };

  const decValue = () => {
    setcounter(counter - 1);
    if (counter <= 0) {
      setcounter(0);
    }
  };

  return (
    <>
      <div className="main">
        <h1>Number Counter</h1>
        <h2>counter value: {counter}</h2>
        <div className="buttons">
          <button onClick={addValue}>Increment {counter}</button>
          <button onClick={decValue}>Decrement {counter}</button>
        </div>
      </div>
    </>
  );
};

export default App;
