import logo from './logo.svg';
import './App.css';
import React, { useRef } from 'react';

function App() {
  const currentInput = useRef(null);
  const handleButton=()=>
    {
      console.log(currentInput.current.value);
    };
  return (
    <div className="App">
      <form>
     <input type="text" ref={currentInput}></input>
     <button type="button" onClick={handleButton}>Вывести</button>
     </form>
    </div>
  );
}

export default App;
