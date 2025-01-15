import Header from "./components/Header";
import "./App.css";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransection from "./components/AddTransection";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="conntainer">
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransection />
      </div>
    </GlobalProvider>
  );
};

export default App;
