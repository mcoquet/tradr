import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import Dashboard from './Pages/Dashboard';
import Exchanges from './Pages/Exchanges';
import "./App.css";
import awsExports from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
Amplify.configure(awsExports);

function App() {
  return (
    <Authenticator>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/exchanges" element={<Exchanges />} />
        </Routes>
      </Router>
    </Authenticator>
  );
}

export default App;
