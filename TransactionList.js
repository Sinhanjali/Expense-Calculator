import React, {useContext} from 'react';
import Transaction from './Transaction';
import {GlobalContext} from './GlobalState'

const TransactionList = () => {
  
  const {transaction} = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transaction.map(transaction => (<Transaction key = {transaction.id} transaction= {transaction}/>))}
      
      </ul>
    </>
  )
}

export default TransactionList
