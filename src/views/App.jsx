import React from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = ({ children }) => {
  return <AppContainer>{children}</AppContainer>;
};

export default App;
