import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Transactions from "./components/Transactions";
import GlobalState from "./store/GlobalState";

function App() {
  const [showForm, setShowForm] = useState(false);

  function toggleShowForm() {
    setShowForm(!showForm);
  }

  return (
    <GlobalState>
    <div className="container">
      <Header onToggleShowForm={toggleShowForm} showForm={showForm} />
      {showForm && <Form  />}
      <Transactions />
    </div>
    </GlobalState>
  );
}

export default App;
