import React, { useState } from "react";
import ExpenseTrackerForm from "./Components/ExpenseTracker";
import ExpenseTrackerTable from "./Components/ExpenseTrackerTable";

function App() {
  useState();
  return (
    <div>
      <ExpenseTrackerForm />
      <ExpenseTrackerTable />
    </div>
  );
}

export default App;
