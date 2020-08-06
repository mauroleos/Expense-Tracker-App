import React, { Component } from "react";

class ExpenseTrackerForm extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <form>
        <label>
          Type
          <select>
            <option value="Card">Card</option>
            <option value="Cash">Cash</option>
            <option value="Cryptocoin">Cryptocoin</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <br />
        <input type="text" placeholder="What did you spend it on"></input>
      </form>
    );
  }
}

export default ExpenseTrackerForm;
