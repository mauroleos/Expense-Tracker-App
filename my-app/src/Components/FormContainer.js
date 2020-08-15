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
      },
      expenses: {
        id: undefined,
        type: undefined,
        description: undefined,
        date: undefined,
        amount: undefined,
      },
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.submitted = this.submitted.bind(this);
  }

  submitted = (e) => {
    e.preventDefault();

    const expense = {
      id: this.state.expenses.id,
      type: this.state.expenses.type,
      description: this.state.expenses.description,
      date: this.state.expenses.date,
      amount: this.state.expenses.amount,
    };

    this.setState({
      expenses: expense,
    });
    // console.log(expense);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    // console.log(this.state.description);
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
              type="text"
              name="amount"
              value={this.state.expenses.amount}
              placeholder="Amount"
              onChange={this.handleChange}
            />
            <br />
            <button>Submit</button>
          </form>
        </main>
        <Table data={this.state} />
      </div>
    );
  }
}
export default Form;
