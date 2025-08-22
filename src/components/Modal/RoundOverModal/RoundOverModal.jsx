import React, { useContext } from "react";
import { RoundOverTitle, RoundOverSubTitle } from "./RoundOver.styled";
import { ModalHeader, ModalBody, ModalFooter } from "../Modal.styled";
import { ModalButton } from "../Modal.styled";
import { GameContext } from "../../../context/GameContext";
import { ModalContext } from "../../../context/ModalContext";

const RoundOverModal = () => {
  const { resetGame, game } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);

  return (
    <>
      <ModalHeader>
        <RoundOverTitle>
          {game.roundWinner.name} won
          this Round!
        </RoundOverTitle>
      </ModalHeader>
      <ModalBody>
        <RoundOverSubTitle>Choices will be switched now.</RoundOverSubTitle>
        <RoundOverSubTitle>{game.player1.name}: {game.player1.score}</RoundOverSubTitle>
        <RoundOverSubTitle>{game.player2.name}: {game.player2.score}</RoundOverSubTitle>
      </ModalBody>
      <ModalFooter>
        <ModalButton
          onClick={() => {
            handleModal();
            resetGame();
          }}
        >
          Continue
        </ModalButton>
        <ModalButton>Restart</ModalButton>
      </ModalFooter>
    </>
  );
};

export default RoundOverModal;
