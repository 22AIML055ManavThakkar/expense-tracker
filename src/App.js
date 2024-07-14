import React from 'react';
import { Header } from './component/Header';
import { Balance } from './component/Balance';
import { AddTransaction } from './component/AddTransaction';
import { IncomeExpenses } from './component/IncomeExpenses';
import { TransactionList } from './component/TransactionList';
import { GlobalProvider } from './context/GlobalState';
import './App.css'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <div className='expenses-form-container'>
        <Balance />
        <IncomeExpenses />
        <AddTransaction />
        </div>
        <div className='list-container'>
        <TransactionList />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
