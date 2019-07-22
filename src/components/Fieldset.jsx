import React from "react";
import styled from "styled-components";

const FieldsetContainer = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  border: 1px solid ${props => props.theme.border};
  background: ${props => props.theme.white};
  box-sizing: border-box;
  padding: 2rem;
  box-shadow: 0px 0px 1px rgba(10, 31, 68, 0.06),
    0px 3px 3px rgba(10, 31, 68, 0.1);
  border-radius: 8px;
`;

const Fieldset = ({ children }) => (
  <FieldsetContainer>{children}</FieldsetContainer>
);

export default Fieldset;
