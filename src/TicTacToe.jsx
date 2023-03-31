import { useState } from "react";
import './styles.css'

function Square({val,onSquareClick}){
    return(
    <button className="square" onClick={onSquareClick}>{val}</button>
    )
}


export default function TicTacToe(){
    const [xnext,setXnext]=useState(true)
    const [history,setHistory]=useState([Array(9).fill(null)])
    const [currentMove,setCurrentMove]=useState(0);
    const currentSquares = history[currentMove]
    function handlePlay(nextSquares){
        const nextHistory=[...history.slice(0,currentMove+1),nextSquares]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length-1)
        setXnext(!xnext)
    }
    function jumpTo(nextMove){
        setCurrentMove(nextMove)
        if(nextMove%2===0){
            setXnext(true)
        }
    }
    const moves = history.map((squares,move)=>{
        let description;
        if(move>0){
            description="go to move #"+move
        }else{
            description="Move to game start"
        }
        return <li key={move}><button onClick={()=>jumpTo(move)}>{description}</button></li>;
    })
   return (
    <>
    <div className="game">
        <div className="game-board">
            <Board xturn={xnext} handlePlay={handlePlay} squares={currentSquares}/>
        </div>
        <div className="game-info">
            <ol>
                {moves}
            </ol>
        </div>
    </div>
    </>
   )
}

function Board({xturn,handlePlay,squares}){
    // const [squares,setSquares]=useState(Array(9).fill(null))
    // const [xturn,setXturn] = useState(true)
    function handleClick(i){
        if(squares[i] || calculateWinner(squares)){
            return;
        }
        const newSquares=squares.slice();
        if(xturn===true){
            newSquares[i]="X";
        }else if(xturn===false)(
            newSquares[i]="0"
        )
        // setSquares(newSquares)
        // setXturn(!xturn)
        handlePlay(newSquares)
    }

    //my code
    let status;
    if(calculateWinner(squares)===null){
        if(xturn===true){
            status="X has to move now"
        }else{
            status="O has to move now"
        }
    }else{
        status=calculateWinner(squares)+" is the winner"
    }

    //react website code
    // const winner = calculateWinner(squares);
    // let status;
    // if (winner) {
    //   status = 'Winner: ' + winner;
    // } else {
    //   status = 'Next player: ' + (xturn ? 'X' : 'O');
    // }
    return (
        <>
        <p style={{fontWeight:"bold"}}>{status}</p>
        <div className="board-row">
            <Square val={squares[0]} onSquareClick={()=>handleClick(0)}/>
            <Square val={squares[1]} onSquareClick={()=>handleClick(1)}/>
            <Square val={squares[2]} onSquareClick={()=>handleClick(2)}/>
        </div>
        <div className="board-row">
            <Square val={squares[3]} onSquareClick={()=>handleClick(3)}/>
            <Square val={squares[4]} onSquareClick={()=>handleClick(4)}/>
            <Square val={squares[5]} onSquareClick={()=>handleClick(5)}/>
        </div>
        <div className="board-row">
            <Square val={squares[6]} onSquareClick={()=>handleClick(6)}/>
            <Square val={squares[7]} onSquareClick={()=>handleClick(7)}/>
            <Square val={squares[8]} onSquareClick={()=>handleClick(8)}/>   
        </div>
        </>
    )
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
        return squares[a];
      }
    }
    return null;
  }