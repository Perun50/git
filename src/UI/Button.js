import React from "react";

function Button({ children, type = "button", onToggleShowForm }) {
  return (
    <button className="add-transaction" type={type} onClick={onToggleShowForm}>
      {children}
    </button>
  );
}

export default Button;
