import React, { Component } from "react";
import Table from "./Table";
import Header from "./Header";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        id: "",
        type: "",
        description: "",
        date: "",
        amount: "",
        deleteButton: "",
      },
      expenses: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitted = this.submitted.bind(this);
    this.deleteButton = this.deleteButton(this);
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
        <button onClick={(id) => this.deleteButton(expense.id)}>X</button>
      ),
    };
    this.setState({
      expenses: [...this.state.expenses, expense],
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  deleteButton = (id) => {
    alert("It works!");
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
            <button>Submit</button>
          </form>
        </main>
        <Table expenses={this.state.expenses} id={this.state.id} />
      </div>
    );
  }
}
export default Form;
