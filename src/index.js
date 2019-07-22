import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider as AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "styled-components";

import * as serviceWorker from "./serviceWorker";

import GlobalStyle from "./GlobalStyle";
import App from "./views/App";
import Login from "./views/Login";
import UserPanel from "./views/UserPanel";

const theme = {
  background: "#f9f9fc",
  black: "#252529",
  white: "#ffffff",
  primary: "#477bff",
  textPrimary: "#0a1f44",
  textRegular: " #4e5d78",
  textPlaceholder: "#8a94a6",
  border: "#e1e4e8",
  danger: "#ff695b"
};

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <App>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/userPanel" component={UserPanel} />
          </Switch>
          <GlobalStyle />
        </App>
      </ThemeProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
