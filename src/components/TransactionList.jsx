import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState"; // Ensure correct relative path
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transactions={transaction} />
        ))}
      </ul>

      <h3>Add new transaction</h3>
    </>
  );
};

export default TransactionList;
