import React from "react";
import { PlayerWrapper, PlayerAvatar } from "./player.styled";
import Avatar, { genConfig } from "react-nice-avatar";
import { SubTitle } from "../../styles/General.Styled";

const Player = ({ player, isPlayerActive }) => {
  if (!player) {
    return <PlayerWrapper>Loading...</PlayerWrapper>;
  }

  // const updatedAvatarConfig = {
  //   ...player.avatarConfig,
  // }
 
  return (
    <PlayerWrapper>
      <PlayerAvatar isPlayerActive={isPlayerActive ?? false}>
        <Avatar {...player.avatarConfig} />
      </PlayerAvatar>

      <SubTitle>
        {player.name} ({player.choice.toUpperCase()})
      </SubTitle>
      <SubTitle>{player.score}</SubTitle>
    </PlayerWrapper>
  );
};

export default Player;
