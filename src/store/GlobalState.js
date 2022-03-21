import React, { useReducer, createContext } from "react";

const initialState = {
  transactions : [
    { transaction: "heat", amount: "20", id: 324 },
    { transaction: "bonus", amount: "100", id: 5678 },
  ],
};

function reducer(state, action){
    switch(action.type){
        case "DELETE":
            return{
                ...state,
                transactions: state.transactions.filter(item=> item.id !== action.payload)
            }
        default:
            return state.transactions
    }
}

export  const GlobalContext = createContext(initialState);

function GlobalState({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)
     
    function deleteTransaction(id){
        dispatch ({
            type: "DELETE",
            payload: id
        })
    }

  return <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
  }}>
    {children}
  </GlobalContext.Provider>
}

export default GlobalState;
