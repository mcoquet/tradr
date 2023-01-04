import { Card } from '@aws-amplify/ui-react';
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function SidebarNav() {
  const location = useLocation(); // get the current location from React Router

  return (
    <Card variation="outlined">
      <div className="sidebar">
        <h2>Navigation</h2>
        <ul>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          </li>
          <li>
            <Link to="/trades" className={location.pathname === '/trades' ? 'active' : ''}>Trades</Link>
          </li>
          <li>
            <Link to="/exchanges" className={location.pathname === '/exchanges' ? 'active' : ''}>Exchanges</Link>
          </li>
          <li>
            <Link to="/channels" className={location.pathname === '/channels' ? 'active' : ''}>Channels and Messages</Link>
          </li>
        </ul>
      </div>
    </Card>
  );
}

export default SidebarNav;
