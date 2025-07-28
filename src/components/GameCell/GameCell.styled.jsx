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
`;
