import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import './component/Form';

function Square( { value, onSquareClick } : {value: string, onSquareClick: any}){
  
  return( 
    <button 
      className="square"
      onClick={onSquareClick}
      >{value}</button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState<any>(Array(9).fill(null));

  function handleClick(i){
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }
  return (
  <> 
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={handleClick} />
      <Square value={squares[1]} onSquareClick={handleClick}/>
      <Square value={squares[2]} onSquareClick={handleClick}/>
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquareClick={handleClick}/>
      <Square value={squares[4]} onSquareClick={handleClick}/>
      <Square value={squares[5]} onSquareClick={handleClick}/>
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={handleClick}/>
      <Square value={squares[7]} onSquareClick={handleClick}/>
      <Square value={squares[8]} onSquareClick={handleClick}/>
    </div>
  </>
     
  );

  
}

// export default App;
