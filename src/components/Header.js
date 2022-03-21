import React, {useContext} from "react";
import { GlobalContext } from "../store/GlobalState";
import Button from "../UI/Button";

function Header({ showForm, onToggleShowForm }) {

  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(transaction=> Number(transaction.amount));
  
  const total = amounts.reduce((acc, cur)=> acc+cur, 0).toFixed(2)

  return (
    <>
      <h1>Expense Tracker</h1>
      <h4>
        Balanse account: <span className="balanse">${total}</span>
      </h4>
      <div className="expenses">
        <h5 className="income-title">
          Income:<span>$800</span>
        </h5>
        <h5 className="expenses-title">
          Expenses: <span>$400</span>
        </h5>
      </div>
      <Button onToggleShowForm={onToggleShowForm} className="add-transaction">
        {showForm? "Close" : "Add Transaction"}
      </Button>
    </>
  );
}

export default Header;
