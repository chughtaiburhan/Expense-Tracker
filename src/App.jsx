import Header from "./components/Header";
import "./App.css";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransection from "./components/AddTransection"; 

const App = () => {
  return ( 
    <>
      <Header />
      <div className="conntainer">
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransection />
      </div> 
    </>
  );
};

export default App;
