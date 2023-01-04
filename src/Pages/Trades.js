import React, { useEffect } from 'react';
import { Card, Table, Text } from '@aws-amplify/ui-react';
import TwoColumnLayout from '../Layouts/TwoColumnLayout';
import { DataStore } from '@aws-amplify/datastore';
import { Trades } from '../models';

function TradesPage() {
  return (
    <TwoColumnLayout>
      <Card
        columnStart="2"
        columnEnd="-1"
      >
        <Text>Trades</Text>
      </Card>
      </TwoColumnLayout>
  );
}

export function ActiveTrades() {

  const [trades, setTrades] = React.useState([]);
  const [empty, setEmpty] = React.useState(true);

  useEffect(() => {
    async function loadTrades() {
      // Retrieve the active trades from the database
      const activeTrades = await DataStore.query(Trades);
      setTrades(activeTrades);
      if (activeTrades.length > 0) {
        setEmpty(false);
      }
    }
    loadTrades();
  }, []);

  return (<>
    { !empty && <Card variation='outlined'><Table className="trade-table">
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
      {trades.map(trade => (
        <tr key={trade.id}>
          <td>{trade.asset}</td>
          <td>{trade.quantity}</td>
          <td>{trade.entryPrice}</td>
          <td>{trade.stopLoss}</td>
          <td>{trade.source}</td>
        </tr>
      ))}
    </tbody>
  </Table></Card>}
    { empty && <Card> <p>No active trades</p> </Card>}
    </>);
  
}

export default TradesPage;
