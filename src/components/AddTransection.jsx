import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState.jsx";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  // Destructure addTransaction from GlobalContext
  const { addTransaction } = useContext(GlobalContext);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Create a new transaction object
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000), // Unique ID generation
      text,
      amount: +amount, // Ensure amount is a number
    };

    // Call the addTransaction function from context
    addTransaction(newTransaction);

    // Reset the form fields
    setText("");
    setAmount(0);
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            id="text"
            type="text"
            value={text}
            onChange={handleTextChange}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount..."
          />
        </div>
        <button type="submit" className="btn">
          Add Transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
