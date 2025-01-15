import { createContext } from "react";

// Initial State
export const initialState = {
  transactions: [],
};

// Create Context
export const GlobalContext = createContext(initialState);
