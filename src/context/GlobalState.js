import React,{ createContext,useReducer,useEffect} from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transactions: JSON.parse(localStorage.getItem('transactions')) || []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer,initialState);

    function deleteTransaction(id){
        dispatch({  
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    function updateTransaction(updatedTransaction) {
        dispatch({
          type: 'UPDATE_TRANSACTION',
          payload: updatedTransaction
        });
      }

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(state.transactions));
      }, [state.transactions]);

    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,addTransaction,updateTransaction
    }}>{children}</GlobalContext.Provider>);
}

