import React, { createContext, useState } from "react";

// Create the GameContext
export const GameContext = createContext({});

// Create the provider component
export const GameContextProvider = (props) => {
  const [game, setGame] = useState({
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    player1: {
      choice: "X",
      name: "sekhona",
    },
    player2: {
      choice: "O",
      name: "sokhulu",
    },
    turn: "X",
  });

  const updateBoard = (index) => {
    let updateBoard = game.board;
    updateBoard[index] = game.turn;
    setGame({
      ...game,
      board: updateBoard,
      turn: game.turn === "X" ? "O" : "X",
    });
  };

  return (
    <GameContext.Provider value={{ game, updateBoard }}>
      {props.children}
    </GameContext.Provider>
  );
};
