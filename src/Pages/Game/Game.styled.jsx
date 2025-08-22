import styled from "styled-components";

export const GameBoardStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`;

// export const PlayerContainer = styled.div`
//   height: 80vh;
//   width: 100vw;
//   background-color: ${(props) => props.theme.colors.primary};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: ${(props) => props.colomonBased ? "column" : "row"};
//   padding: 0 2rem;
//   text-align: center;
// `;