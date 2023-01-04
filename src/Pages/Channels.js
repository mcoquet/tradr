import React, { useEffect } from 'react';
import { Card, Table } from '@aws-amplify/ui-react';
import TwoColumnLayout from '../Layouts/TwoColumnLayout';
import { Channels } from '../models';
import { DataStore } from 'aws-amplify';

function ChannelsPage() {
  return (
    <TwoColumnLayout>
      <Card
        columnStart="2"
        columnEnd="-1"
      >



      </Card>
    </TwoColumnLayout>
  );
}

export function ActiveChannels() {
  const [channels, setChannels] = React.useState([]);
  const [empty, setEmpty] = React.useState(true);

  useEffect(() => {
    async function load() {
      // Retrieve discord channels from the database
      const activeChannels = await DataStore.query(Channels);
      setChannels(activeChannels);
      if (activeChannels.length > 0) {
        setEmpty(false);
      }
    }
    load();
  }, []);

  return (<>
    {!empty && <Card variation='outlined'><Table className="trade-table">
      <thead>
        <tr>
          <th>Asset</th>
          <th>Quantity</th>
          <th>Entry Price</th>
          <th>Stop Loss</th>
          <th>Source</th>
        </tr>
      </thead>
      <tbody>
        {channels.map(channel => (
          <tr key={channel.id}>
            <td>{channel.name}</td>
            <td>{channel.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </Table></Card>}
    {empty && <Card> <p>No active trades</p> </Card>}
  </>);
}

export default ChannelsPage;
