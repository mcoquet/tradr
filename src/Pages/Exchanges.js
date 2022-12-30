import React from 'react';
import { Card, Text } from '@aws-amplify/ui-react';
import TwoColumnLayout from '../Layouts/TwoColumnLayout';

function Exchanges() {
  return (
    <TwoColumnLayout>
      <Card
        columnStart="2"
        columnEnd="-1"
      >
        <ul className="exchange-list">
          <li className="exchange-card">
            <Text>+</Text>
          </li>
          <li className="exchange-card">
            <h2>Exchange 1</h2>
            <p>Description of Exchange 1</p>
          </li>
          <li className="exchange-card">
            <h2>Exchange 2</h2>
            <p>Description of Exchange 2</p>
          </li>
          <li className="exchange-card">
            <h2>Exchange 3</h2>
            <p>Description of Exchange 3</p>
          </li>
        </ul>
      </Card>
      </TwoColumnLayout>
  );
}

export default Exchanges;
