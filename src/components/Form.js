import React, { useRef } from "react";
import Button from "../UI/Button";

function Form({ onToggleShowForm }) {
  const descriptionRef = useRef();
  const amountRef = useRef();

  function formSubmit(e) {
    e.preventDefault();
    const newTransaction = {
      description: descriptionRef.current,
      amount: amountRef.current,
    };

    console.log(newTransaction);
  }

  return (
    <>
      <form onSubmit={formSubmit}>
        <div className="description">
          <label name="description">Description:</label>
          <input
            ref={descriptionRef}
            type="text"
            id="description"
            placeholder="Enter Description"
            required
          />
        </div>
        <div className="amount">
          <label name="amount">Amount:</label>
          <input
            ref={amountRef}
            type="number"
            id="amount"
            placeholder="Enter Amount"
          />
        </div>
        <Button type="submit">Submit Transaction</Button>
      </form>
    </>
  );
}

export default Form;
