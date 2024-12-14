import React, { useState } from 'react';
import './tictactoe.css';
import { isGameOver, hasPlayerWon, switchPlayer, makeMove } from './gameFunctions';

function TicTacToe() {
  const [gameBoard, setGameBoard] = useState(Array(9).fill(""));
  const [currentPlayerState, setCurrentPlayerState] = useState("X");
  const [message, setMessage] = useState("");

  const handleCellClick = (i) => {
    if (gameBoard[i] === "" && !isGameOver(gameBoard)) {
      const updatedBoard = [...gameBoard]; 
      const moveValid = makeMove(i, currentPlayerState, updatedBoard);

      if (moveValid) {
        setGameBoard(updatedBoard); 
        if (isGameOver(updatedBoard)) {
         
          if (hasPlayerWon(currentPlayerState, updatedBoard)) {
            setMessage(`Player ${currentPlayerState} wins!`);
          } else {
            setMessage("Game over! It's a tie.");
          }
        } else {
          setCurrentPlayerState(switchPlayer(currentPlayerState)); 
        }
      }
    }
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {gameBoard.map((cell, i) => (
          <div
            key={i}
            className="cell"
            onClick={() => handleCellClick(i)}
          >
            {cell}
          </div>
        ))}
      </div>
      <h2>{message}</h2>
    </div>
  );
}

export default TicTacToe;
