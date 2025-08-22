import styled from "styled-components";

const Container = styled.div`
  height: 80vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.columnBased ? "column" : "row")};
  padding: 0 2rem;
  text-align: center;

  ${(props) => props.theme.media.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: 3rem;
  font-family: "Pacifico", cursive;
  background-color: transparent;
`;

const SubTitle = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.5rem;
  font-weight: 200;
  background-color: transparent;
`;

export { Title, SubTitle, Container };
