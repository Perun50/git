import React, { useContext } from "react";
import { GlobalContext } from "../store/GlobalState";
import { MdDeleteOutline } from "react-icons/md";

function Transaction({ item }) {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <>
      <div className="transaction">
        <div>{item.transaction}</div>
        <div> ${item.amount}</div>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(item.id)}
        >
          <span>
            <MdDeleteOutline className="icon" />
          </span>
        </button>
      </div>
    </>
  );
}

export default Transaction;
