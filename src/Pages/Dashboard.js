import React from 'react';
import { Card, Heading } from '@aws-amplify/ui-react';
import TwoColumnLayout from '../Layouts/TwoColumnLayout';
import { ActiveTrades } from './Trades';
import { ActiveChannels } from './Channels';

function Dashboard() {
  return (
    <TwoColumnLayout>
      <Card variation='outlined'>
        <Heading level={6}>Active Trades</Heading>
        <ActiveTrades />
        <Heading level={6}>Active Signal Sources</Heading>
        <ActiveChannels />
      </Card>
    </TwoColumnLayout>
  );
}

export default Dashboard;
