import React from "react";
import GlobalStyle from "./styles/global";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "./styles/theme";
import { AuthProvider } from "./hooks/AuthContext";
import { ThemeProvider } from "styled-components";
import Routes from "./routes";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Routes />
          <GlobalStyle />
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
}
