import { createContext, useReducer } from "react";
import PropTypes from "prop-types"; // Import PropTypes for validation
import AppReducer from "./AppReducer"; // Ensure the correct path to AppReducer

// Initial State
const initialState = {
  transactions: [],
};

// Create Context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Action
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        dispatch, // Pass dispatch if you want to use it in child components
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// PropTypes validation for children prop
GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a React node and required
};
