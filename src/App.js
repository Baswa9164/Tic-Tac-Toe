
import './App.css';
import { useState } from 'react';
import Box from './Box';
import Final from './final';

function App() {
  const [fill,setFill]=useState("X");

const [win,SetWin]=useState(Array(9).fill(false));
const [status,setStatus]=useState(null);

function check(i,val){
  const A  = win;
  A[i]=val;
  if(calculateWinner(A)){
    console.log(val + "  won the game");
    setStatus(val);;
  }
  SetWin(A);
}

function changeStatus(a){
  console.log(a+"parent");
setFill(a==="X"? "O":"X");
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return 1;
    }
  }
  return null;
}


  return (
    
    <div className="App">
   
  <h1 className='header'>TIC-TAC-TOE</h1>
 {!status ? 
(
<div className='Boxgrid'>
  
   <div className='item'>
    <Box  Number ={0} handleChange={check} fill={fill} updatefill={changeStatus}/>
    </div>

    <div className='item'>
    <Box  Number ={1} handleChange={check} fill={fill} updatefill={changeStatus}/>
    </div>
    
    <div className='item'>
    <Box  Number ={2} handleChange={check} fill={fill} updatefill={changeStatus}/>
    </div>

    <div className='item'>
    <Box  Number ={3} handleChange={check} fill={fill} updatefill={changeStatus}/>
    </div>

    <div className='item'>
    <Box  Number ={4} handleChange={check} fill={fill} updatefill={changeStatus}/>
    </div>
    
    <div className='item'>
    <Box  Number ={5} handleChange={check} fill={fill} updatefill={changeStatus}/>
    </div>
    <div className='item'>
    <Box  Number ={6} handleChange={check} fill={fill} updatefill={changeStatus}/>
    </div>

    <div className='item'>
    <Box  Number ={7}handleChange={check} fill={fill} updatefill={changeStatus}/>
    </div>
    
    <div className='item'>
    <Box  Number ={8}handleChange={check} fill={fill} updatefill={changeStatus}/>
    </div>

</div>):(<>
<Final  who={status}/>
<h1 className='windeclare'>🤟🤟 {status} won the game 🤟🤟</h1>
</>)}    
    </div>
  );
}

export default App;
