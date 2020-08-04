import React, { useState } from "react";
import ReactDom from "react-dom";
import ExpenseTracker from "./Components/ExpenseTracker";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function App() {
  useState();
  return (
    <>
      <ExpenseTracker />
      <input type="text" /> Name
      <input type="text" /> Amount
      <input /> Type
      <input /> Date
      {<Button>Add a new expense</Button>}
      <Container style={{ marginTop: 30 }}>
        <div class="row">
          <div class="col"></div>
          <div class="col"></div>
        </div>
      </Container>
    </>
  );
}

export default App;
