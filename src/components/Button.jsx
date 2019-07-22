import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  opacity: ${props => (props.disabled ? "0.4" : "1")};
  background: ${props => props.theme.primary};
  border-radius: 4px;
  border: 1px solid ${props => props.theme.primary};
  color: ${props => props.theme.white};
  padding: 12px 24px;
  width: 300px;
  transition: 0.5s all ease-out;
  margin-top: 16px;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

const Button = ({ text, disabled, type, onClick }) => (
  <StyledButton disabled={disabled} type={type} onClick={onClick}>
    {text}
  </StyledButton>
);

export default Button;
