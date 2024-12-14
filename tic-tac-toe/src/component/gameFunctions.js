const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  const isGameOver = (gameBoard) => {
    return gameBoard.every((cell) => cell !== ""); 
  };
  
  const hasPlayerWon = (player, gameBoard) => {
    return winningCombination.some((combination) => {
      return combination.every((i) => gameBoard[i] === player);
    });
  };
  
  const switchPlayer = (currentPlayer) => {
    return currentPlayer === "X" ? "O" : "X";
  };
  
  const makeMove = (i, currentPlayer, gameBoard) => {
    if (gameBoard[i] !== "") {
      return false; 
    }
    gameBoard[i] = currentPlayer; 
    return true;
  };
  
  export { isGameOver, hasPlayerWon, switchPlayer, makeMove };
  