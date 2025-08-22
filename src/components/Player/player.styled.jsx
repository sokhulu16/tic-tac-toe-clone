import styled from "styled-components";

export const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem;

  ${(props) => props.theme.media.mobile} {
    flex-direction: row;
     margin: 4rem;
  }
`;

export const PlayerAvatar = styled.div`
  div {
    display: flex;
    width: 10rem;
    height: 10rem;
    filter: ${(props) => (props.isPlayerActive ? "none" : "grayscale(100%)")};
    transition: filter 0.3s ease;
  }
`;
