import React, { useContext } from "react";
import { Container } from "../../styles/General.Styled";
import { GameBoardStyle } from "./Game.styled";
import GameCell from "../../components/GameCell/GameCell";
import { GameContext } from "../../context/GameContext";

const Games = () => {
  const { game } = useContext(GameContext);
  const { board } = game;

  if (!board) return <div>Loading...</div>;

  return (
    <Container>
      <GameBoardStyle>
        {board.map((value, index) => (
          <GameCell key={index} value={value} index={index} />
        ))}
      </GameBoardStyle>
    </Container>
  );
};

export default Games;

