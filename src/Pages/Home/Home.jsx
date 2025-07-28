import React from "react";
import { Title, SubTitle, Container } from "../../styles/General.Styled";
import Button from "../../components/Button/Button"
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Title>Tic Tac Teo</Title>
      <SubTitle>Play with your friends, higher score wins!</SubTitle>
      <Button onClick={() => navigate("/game-on")}>Play Now</Button>
    </Container>
  );
};

export default Home;
