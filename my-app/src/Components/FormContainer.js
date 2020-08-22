import React, { Component } from "react";
import Table from "./Table";
import Header from "./Header";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      disabled: true,
      // form: {
      //   id: "",
      //   type: "",
      //   description: "",
      //   date: "",
      //   amount: "",
      //   deleteButton: "",
      // },
      expenses: [],
    };

    this.submitted = this.submitted.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.formComplete = this.formComplete.bind(this);
  }

  submitted = (e) => {
    e.preventDefault();

    const expense = {
      id: Math.random(),
      type: this.state.type,
      description: this.state.description,
      date: this.state.date,
      amount: this.state.amount,
      deleteButton: (
        <button onClick={() => this.deleteButton(expense.id)}>X</button>
      ),
    };

    this.setState({
      expenses: [...this.state.expenses, expense],
    });
    e.target.reset();
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  formComplete = (e) => {
    if (e.target.value.length > 0) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  };

  deleteButton = (id) => {
    this.setState({
      expenses: [...this.state.expenses.filter((expense) => expense.id !== id)],
    });
  };

  render() {
    return (
      <div>
        <Header />
        <main className="table">
          <form onSubmit={this.submitted}>
            <label>
              <select
                name="type"
                value={this.state.expenses.type}
                onChange={this.handleChange}
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
              className="col-sm-6 col-md-3"
              type="text"
              name="description"
              value={this.state.expenses.description}
              placeholder="Description"
              onChange={this.handleChange}
            />
            <br />
            <input
              className="col-sm-6 col-md-3"
              type="date"
              name="date"
              value={this.state.expenses.date}
              placeholder="Date"
              onChange={this.handleChange}
            />
            <br />
            <input
              className="col-sm-6 col-md-3"
              type="number"
              name="amount"
              value={this.state.expenses.amount}
              placeholder="Amount"
              onChange={this.handleChange}
            />
            <br />
            <button disabled={this.state.disabled} onChange={this.formComplete}>
              Submit
            </button>
          </form>
        </main>
        <Table expenses={this.state.expenses} />
      </div>
    );
  }
}
export default Form;
