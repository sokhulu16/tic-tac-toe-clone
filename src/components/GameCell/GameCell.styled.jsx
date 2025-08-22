import styled from "styled-components";

export const CellStyle = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  font-size: 2rem;
  border: none;
  border-radius: 10px;
  width: 10rem;
  height: 10rem;
  box-shadow: 5px 10px ${(props) => props.theme.colors.gray};
  cursor: pointer;
  transition: transform 0.2s ease;

  .markedItem {
    path {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  .outlineIcon {
    path {
      stroke: ${(props) => props.theme.colors.primary};
      stroke-width: 0;
      transition: stroke-width 0.2s ease-in-out;
    }
  }

  &:hover {
    transform: scale(1.05);

    .outlineIcon path {
      stroke-width: 2;
    }
  }

  ${(props) => props.theme.media.mobile} {
    width: 6rem;
    height: 6rem;
    font-size: 1.5rem;
  }
`;
