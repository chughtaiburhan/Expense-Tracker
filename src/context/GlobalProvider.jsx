import   { useReducer } from "react";
import PropTypes from "prop-types";
import { GlobalContext, initialState } from "./GlobalContext"; // Import the context and initial state
import AppReducer from "./AppReducer"; // Ensure the correct path to AppReducer

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// PropTypes validation
GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
