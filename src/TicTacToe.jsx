import { useState } from "react";
import './styles.css'

function Square(){
    let [value,setValue]=useState(null)
    function handleClick(){
        setValue("X")
    }
    return(
    <button className="square" onClick={handleClick}>{value}</button>
    )
}


export default function TicTacToe(){
    return (
        <>
        <div className="board-row">
            <Square/>
            <Square/>
            <Square/>
        </div>
        <div className="board-row">
            <Square />
            <Square />
            <Square />
        </div>
        <div className="board-row">
            <Square />
            <Square />
            <Square />
        </div>
        </>
    )
}