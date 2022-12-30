import React, { useEffect } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Trades } from '../models';
import { Table, Card } from '@aws-amplify/ui-react';
import TwoColumnLayout from '../Layouts/TwoColumnLayout';

function Dashboard() {
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

  return (
    <TwoColumnLayout> 
      { !empty && <Card variation='outlined'> <Table className="trade-table">
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
        </Table> </Card>}
        { empty && <Card> <p>No active trades</p> </Card>}
      

    </TwoColumnLayout>
  );
}

export default Dashboard;
