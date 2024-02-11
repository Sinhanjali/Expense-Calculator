import './App.css';
import Header from './Header';
import Balance from './Balance';
import Incomeexpenses from './Incomeexpenses';
import Transaction from './Transaction';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';
import {GlobalProvider } from './GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <Incomeexpenses/>
        <Transaction/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
