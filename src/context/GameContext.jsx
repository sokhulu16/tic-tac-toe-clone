import React, { createContext, useState } from "react";
import { genConfig } from "react-nice-avatar";

// Create the GameContext
export const GameContext = createContext({});

// Create the provider component

const generateAvatarConfig = (color) => {
  const config = genConfig();
  return {
    ...config,
    bgColor: color, // ← this controls the background color of the avatar
  };
};

export const GameContextProvider = (props) => {
  const [game, setGame] = useState({
    board: Array(9).fill(null),
    player1: {
      choice: "X",
      name: "sekhona",
      score: 0,
      color: "#8437f9",
      avatarConfig: generateAvatarConfig("#f9c811"),
    },
    player2: {
      choice: "O",
      name: "sokhulu",
      score: 0,
      color: "#f9c811",
      avatarConfig: genConfig(),
    },
    turn: "X",
    roundWinner: "",
  });

  const resetGame = () => {
    setGame((prev) => ({
      ...prev,
      board: Array(9).fill(null),
      turn: "X", // or maybe randomize the starting turn
    }));
  };

  const updateBoard = (index) => {
    // Prevent overwriting
    if (game.board[index] !== null) return;

    const newBoard = [...game.board]; // ✅ clone the board
    newBoard[index] = game.turn;

    setGame((prev) => ({
      ...prev,
      board: newBoard,
      turn: prev.turn === "X" ? "O" : "X",
    }));
  };

  const toggleChoice = (choice) => (choice === "X" ? "O" : "X");
  const switchTurn = () => {
    setGame((prevGame) => ({
      ...prevGame,
      player1: {
        ...prevGame.player1,
        choice: toggleChoice(prevGame.player1.choice),
      },
      player2: {
        ...prevGame.player2,
        choice: toggleChoice(prevGame.player2.choice),
      },
      turn: toggleChoice(prevGame.turn),
    }));
  };

  const updateScore = (winner) => {
    setGame((prev) => ({
      ...prev,
      [winner]: {
        ...prev[winner],
        score: prev[winner].score + 1,
      },
      roundWinner: winner,
    }));
  };

  const roundComplete = (winningSymbol) => {
    if (winningSymbol === game.player1.choice) {
      updateScore("player1");
    } else if (winningSymbol === game.player2.choice) {
      updateScore("player2");
    } else {
      console.log("It's a draw!");
    }

    switchTurn();
  };

  return (
    <GameContext.Provider
      value={{ game, updateBoard, resetGame, roundComplete }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
