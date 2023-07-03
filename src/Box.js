import Square from './Square';
import { useState } from 'react';
import Replace from './replce';

function Box({Number,handleChange,fill,updatefill}) {
  

  const [square,setSquare]=useState(Array(9).fill(null));
    const [boxwin,setBoxwin]=useState("X");
   const [winner,setWinner] = useState(false);
   function HandleClick(i){      
      //never make copy by equating because values goes by refernce
     if(!winner){
      if(!square[i]){
        const next  =square.slice();
        next[i] =fill;
  
        if(calculateWinner(next)){
          handleChange(Number,fill);
          console.log("winner is declared " + fill);
      setBoxwin(fill);
          setWinner(true);                
        };
        setSquare(next);
       }
       
       else{
        return;
       }
       
  updatefill(fill);
  console.log(fill);
     }

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
        <div className='display'>
            
        { !winner ? 
        (
        <div className='boxgrid'>
        <Square className="item1" value={square[0]} handler={()=>HandleClick(0)}/>
         <Square className="item1" value={square[1]} handler={()=>HandleClick(1)}/>
         <Square className="item1" value={square[2]} handler={()=>HandleClick(2)}/>
         <Square className="item1" value={square[3]} handler={()=>HandleClick(3)}/>
         <Square className="item1" value={square[4]} handler={()=>HandleClick(4)}/>
         <Square className="item1" value={square[5]} handler={()=>HandleClick(5)}/>
         <Square className="item1" value={square[6]} handler={()=>HandleClick(6)}/>
         <Square className="item1" value={square[7]} handler={()=>HandleClick(7)}/>
         <Square className="item1" value={square[8]} handler={()=>HandleClick(8)}/>
      </div>
      )   :
       (<Replace who={boxwin==="X" ? "X":"O"}/>)}
        </div>
      );
    }
    
    export default Box;
    