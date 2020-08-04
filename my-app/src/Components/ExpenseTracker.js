import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function ExpenseTracker() {
  return (
    <div>
      <h3 className="navbar">Name</h3>
      <input type="text" />

      <h3>Amount</h3>
      <input type="text" />

      <h3>Type</h3>
      <input />

      <h3>Date</h3>
      <input />

      {<Button>Add a new expense</Button>}

      <Container style={{ marginTop: 30 }}>
        <div class="row">
          <div class="col"></div>
          <div class="col"></div>
        </div>
      </Container>
    </div>
  );
}

export default ExpenseTracker;
