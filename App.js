import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import Incomeexpenses from './components/Incomeexpenses';
import Transaction from './components/Transaction';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import {GlobalProvider } from './context/GlobalState';

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
