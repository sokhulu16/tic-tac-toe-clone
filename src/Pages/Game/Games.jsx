import React, { useContext, useEffect, useState } from "react";
import { Container } from "../../styles/General.Styled";
import { GameBoardStyle } from "./Game.styled";
import GameCell from "../../components/GameCell/GameCell";
import { GameContext } from "../../context/GameContext";
import Player from "../../components/Player/Player";

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Games = () => {
  const { game, updateBoard, roundComplete } = useContext(GameContext);
  const { board } = game;

  const [revealed, setRevealed] = useState(Array(9).fill(false));
  const [winnerFound, setWinnerFound] = useState(false);

  const handleClick = (index) => {
    if (board[index] !== null || revealed[index] || winnerFound) return;

    const newRevealed = [...revealed];
    newRevealed[index] = true;
    setRevealed(newRevealed);

    updateBoard(index);
  };

  // Check for winner every time the board changes
  useEffect(() => {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinnerFound(true);
        roundComplete(board[a]); // <- pass "X" or "O" here
        return;
      }
    }
  }, [board]);

  return (
    <Container>
      <Player
        player={game.player1}
        isPlayerActive={game.turn === game.player1.choice}
      />

      <GameBoardStyle>
        {board.map((value, index) => (
          <GameCell
            key={index}
            value={value}
            index={index}
            revealed={revealed[index]}
            onClick={() => handleClick(index)}
          />
        ))}
      </GameBoardStyle>

      <Player
        player={game.player2}
        isPlayerActive={game.turn === game.player2.choice}
      />
    </Container>
  );
};

export default Games;

