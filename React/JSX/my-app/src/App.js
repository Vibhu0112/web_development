import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [count,setCount] = useState(0); 

// const state = useState()

function increase(){
  setCount(count+1) 
}


function decrease(){
  setCount(count-1) 
}
  return (
    <div className="App">
      {/* // var count =0; */}
      <h1>increase : {count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>



    </div>
  );
}

export default App;
