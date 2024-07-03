import logo from './logo.svg';
import './App.css';
import InputNumber from './InputNimber';
import { useState } from 'react';
import Message from './Message';
function App() {
  const [number, setNumber]=useState(null);
  const checkNumber=(num)=>
    {
      setNumber(num);
    };
  return (
    <div className="App">
     
       <InputNumber checkNumber={checkNumber}/>
       <Message num = {number}/>
    </div>
  );
}

export default App;
