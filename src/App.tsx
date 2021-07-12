import React from "react";
import GlobalStyle from "./styles/global";
import { BrowserRouter as Router } from "react-router-dom";

import { AuthProvider } from "./hooks/AuthContext";

import Routes from "./routes";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GlobalStyle />
    </Router>
  );
}
