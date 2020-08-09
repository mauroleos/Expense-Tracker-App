import React, { useState } from "react";
import Form from "./Components/FormContainer";
import ExpenseTrackerTable from "./Components/ExpenseTrackerTable";

function App() {
  useState();
  return (
    <div>
      <Form />
      <ExpenseTrackerTable />
    </div>
  );
}

export default App;
