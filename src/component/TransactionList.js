import React, { useContext, useState } from "react";
import { Transaction } from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  const { transactions, updateTransaction } = useContext(GlobalContext);
  const [isEdit, setIsEdit] = useState(null);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <Transaction
            key={transaction.id}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            transaction={transaction}
          />
        ))}
      </ul>
    </>
  )
}