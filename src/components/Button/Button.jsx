import React from "react";
import ButtonWrapper from "./Button.styled";


const Button = (props) => {

  return (
    <div>
      <ButtonWrapper {...props}>{props.children}</ButtonWrapper>
    </div>
  );
};

export default Button;
