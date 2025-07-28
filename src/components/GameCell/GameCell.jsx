import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../context/GameContext";
import { checkForWinner } from "../../utils/GamingUtils/indexUtils";

const GameCell = ({ value, index }) => {
  const { updateBoard, game } = useContext(GameContext);
  const cellClickHandler = () => {
        updateBoard(index);
    const result = checkForWinner(game.board);

    // if (result) {
    // }
  };

  return <CellStyle onClick={cellClickHandler}>{value}</CellStyle>;
};

export default GameCell;
