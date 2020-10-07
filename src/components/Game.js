import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../helpers";

const styles = {
  width: '200px',
  margin: '20px auto',
};

const Game = () => {
  const[board, setBoard] = useState(Array(9).fill(null));
  const[xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (i) => {
    const boardCopy = [...board];
    if(winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "x" : "o";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  }

  const renderMoves = () => (
    <button onClick={() => setBoard(Array(9).fill(null))}>
      start Game
    </button>
  )

  return (
    <>
        <Board squares={board} onClick={handleClick}/>
        <div style={styles}>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
        </div>
    </>
  )
    
    }

export default Game;