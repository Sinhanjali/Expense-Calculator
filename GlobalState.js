import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
//Intial State

const initialState = {
    transaction: []
}

// Create Context

export const GlobalContext = createContext(initialState);

//Provider component

export const GlobalProvider = ({children}) =>{
const [state, dispatch] = useReducer(AppReducer, initialState);

//Actions
function deleteTransaction(id){
    dispatch({
        type:'Delete_Transaction',
        payload: id
    });
}

function addTransaction(transaction){
    dispatch({
        type:'Add_Transaction',
        payload:transaction
    });
}

return (<GlobalContext.Provider value = {{
    transaction:state.transaction,
    deleteTransaction,
    addTransaction
}}>
    {children}
</GlobalContext.Provider>)
}