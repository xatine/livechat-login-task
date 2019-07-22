import React from "react";
import styled from "styled-components";

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: ${props => props.height};
`;

const Field = ({ height, children }) => (
  <FieldContainer height={height}>{children}</FieldContainer>
);

export default Field;
