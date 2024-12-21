import React, { useState } from 'react';
import './tictactoe.css';
import { isGameOver, hasPlayerWon, switchPlayer, makeMove } from './gameFunctions';

function TicTacToe() {
  const [gameBoard, setGameBoard] = useState(Array(9).fill(""));
  const [currentPlayerState, setCurrentPlayerState] = useState("X");
  const [message, setMessage] = useState("");

  

  const handleCellClick = (i) => {
    if (gameBoard[i] === "" && message === "") {
      const updatedBoard = [...gameBoard];
      const moveValid = makeMove(i, currentPlayerState, updatedBoard);
  
      if (moveValid) {
        setGameBoard(updatedBoard);
  
        const playerWon = hasPlayerWon(currentPlayerState, updatedBoard);
        const gameOver = isGameOver(updatedBoard);
  
        if (playerWon) {
          setMessage(`Player ${currentPlayerState} wins!`);
          setTimeout(() => {
            alert(`Player ${currentPlayerState} wins!`);
            resetGame();
          }, 100);
        } else if (gameOver) { 
          setMessage("Game over! It's a tie.");
          setTimeout(() => {
            alert("Game over! It's a tie.");
            resetGame();
          }, 100);
        } else {
          setCurrentPlayerState(switchPlayer(currentPlayerState));
        }
      }
    }
  };
  
  

  const resetGame = () => {
    setGameBoard(Array(9).fill(""));
    setCurrentPlayerState("X");
    setMessage("");
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
