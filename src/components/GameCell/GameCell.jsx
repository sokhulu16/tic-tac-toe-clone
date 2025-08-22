import React, { useContext, useEffect } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../context/GameContext";
import { checkForWinner } from "../../utils/GamingUtils/indexUtils";
import { ReactComponent as IconOOutline } from "../../assets/svgs/icon-o-outline.svg";
import { ReactComponent as IconXOutline } from "../../assets/svgs/icon-x-outline.svg";
import { ModalContext } from "../../context/ModalContext";
import RoundOverModal from "../../components/Modal/RoundOverModal/RoundOverModal";

function GameCell({ value, index, revealed, onClick }) {
  const { game, roundComplete } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);

  useEffect(() => {
    const winner = checkForWinner(game.board);
    const result = checkForWinner(game.board);
    if (result) {
      roundComplete();
      handleModal(<RoundOverModal winner={winner} />);
    }
  }, [game.board]);

  if (value === "X") {
    return (
      <CellStyle disabled>
        <IconXOutline className="markedItem" />
      </CellStyle>
    );
  } else if (value === "O") {
    return (
      <CellStyle disabled>
        <IconOOutline className="markedItem" />
      </CellStyle>
    );
  }

  return (
    <CellStyle onClick={onClick} disabled={revealed}>
      {revealed &&
        (game.turn === "X" ? (
          <IconXOutline className="outlineIcon" />
        ) : (
          <IconOOutline className="outlineIcon" />
        ))}
    </CellStyle>
  );
}

export default GameCell;
