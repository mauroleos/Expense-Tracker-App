import React, { Component } from "react";

class ExpenseTrackerForm extends Component {
  constructor() {
    super();
    this.state = {
      type: "",
      description: "",
      date: "",
      amount: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Type:
          <select
            value={this.state.type}
            onChange={this.handleChange}
            name="type"
          >
            <option value="">-- Please Choose a Type --</option>
            <option value="Card">Card</option>
            <option value="Cash">Cash</option>
            <option value="Cryptocoin">Cryptocoin</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <br />
        <input
          type="text"
          value={this.state.description}
          name="description"
          placeholder="Description"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          value={this.state.date}
          name="date"
          placeholder="Date"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          value={this.state.amount}
          name="amount"
          placeholder="Amount"
          onChange={this.handleChange}
        />
        <h1>{this.state.type}</h1>
        <h1>{this.state.description}</h1>
        <h1>{this.state.date}</h1>
        <h1>{this.state.amount}</h1>
        <button>Submit</button>
      </form>
    );
  }
}

export default ExpenseTrackerForm;
