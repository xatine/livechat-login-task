import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: ${props => props.theme.textRegular};
  font-size: 12px;
  font-weight: bold;
  padding: 0 0 4px 4px;
`;

const StyledInput = styled.input`
  background: ${props => props.theme.white};
  border: 1px solid
    ${props => (props.error ? props.theme.danger : props.theme.border)};
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px;

  &:active,
  &:focus {
    text-align: left;
    border: 1px solid ${props => props.theme.primary};
    box-sizing: border-box;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${props => props.theme.textPlaceholder};
  }
  :-ms-input-placeholder {
    color: ${props => props.theme.textPlaceholder};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }
`;

export const ErrorMessage = styled.p`
  color: ${props => props.theme.danger};
  margin: 0;
  font-size: 12px;
  padding-top: 4px;
`;

const Input = ({ label, error, ...props }) => (
  <InputContainer>
    <Label>{label}</Label>
    <StyledInput error={error} {...props} />
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </InputContainer>
);

export default Input;
