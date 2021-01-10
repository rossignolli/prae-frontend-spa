import React from 'react';
import GlobalStyle from './styles/global'
import SignIn from './pages/SignIn';
import {BrowserRouter as Router } from 'react-router-dom'

import {AuthProvider} from './hooks/AuthContext'

import Routes from './routes'


const App: React.FC = () => (
  <Router>
  <AuthProvider>
    <Routes/>
  </AuthProvider>
  <GlobalStyle/>
  </Router>
);

export default App;
