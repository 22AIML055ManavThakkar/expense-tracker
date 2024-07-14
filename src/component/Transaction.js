import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction, isEdit, setIsEdit }) => {
    const { deleteTransaction, updateTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    const [transactionData, setTransactionData] = useState(transaction);

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {isEdit && transaction.id === isEdit ? <div className="edit-container">
                <input type="text" value={transactionData.text} onChange={(e) => { setTransactionData({ ...transaction, text: e.target.value }) }} />
                <input type="number" value={transactionData.amount} onChange={(e) => { setTransactionData({ ...transaction, amount: parseInt(e.target.value) }) }} />
            </div>:<div className="list-view-container">
                {transaction.text} <span className="transaction-amount">{sign}{Math.abs(transaction.amount)} Rupee</span>
                </div>}

            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
            {isEdit && transaction.id === isEdit ?
                <button onClick={() => { updateTransaction(transactionData); setIsEdit(null) }} className="edit-btn">✅</button> :
                <button onClick={() => setIsEdit(transaction.id)} className="edit-btn">
                    <i className="edit-icon">✏️</i>
                </button>}
        </li>
    );
}