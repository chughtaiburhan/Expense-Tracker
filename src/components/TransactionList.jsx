import { useContext } from "react"; 
import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalContext";

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
