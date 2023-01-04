import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@aws-amplify/ui-react/styles.css';
import Dashboard from './Pages/Dashboard';
import Exchanges from './Pages/Exchanges';
import RouteNotFound from './Pages/RouteNotFound';
import "./App.css";
import awsExports from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import Channels from './Pages/Channels';
import TradesPage from './Pages/Trades';
Amplify.configure(awsExports);

function App() {
  return (
    <Authenticator>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/trades" element={<TradesPage />} />
          <Route path="/channels" element={<Channels />} />
          <Route element={<RouteNotFound/>} />
        </Routes>
      </Router>
    </Authenticator>
  );
}

export default App;
