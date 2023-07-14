import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 100px;
  width: 100%;
  background-color: #f6f6f9;
  margin: auto;
  padding: 1rem 0;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const StyledButton = styled.button`
  width: 310px;
  height: 70px;
  border-radius: 30px;
  background-color: var(--orange);
  border: none;
  padding: 12px 16px;
  color: white;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Button = ({ children, onBack }) => {
  return (
    <Container>
      <StyledButton onClick={onBack}>{children}</StyledButton>
    </Container>
  );
};

export default Button;
