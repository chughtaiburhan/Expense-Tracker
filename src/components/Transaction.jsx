import PropTypes from "prop-types"; // Import PropTypes for validation
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transactions }) => {
  const {deleteTransaction}=useContext(GlobalContext);
  const sign = transactions.amount < 0 ? '-' : '+';
  return (
    <li className={transactions.amount <0 ? 'minus' : 'plus'}>
      {transactions.text} <span>{sign}${Math.abs(transactions.amount)}</span>
      <button onClick={()=>deleteTransaction(transactions.id)} className="delete-btn">x</button>
    </li>
  );
};

// PropTypes validation for transactions prop
Transaction.propTypes = {
  transactions: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
  }).isRequired // Ensure transactions has the correct structure and is required
};
export default Transaction;