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
        id: null,
        type: null,
        description: null,
        date: null,
        amount: null,
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitted = this.submitted.bind(this);
  }

  submitted = (e) => {
    e.preventDefault();

    const expense = {
      id: this.state.id,
      type: this.state.type,
      description: this.state.description,
      date: this.state.date,
      amount: this.state.amount,
    };

    this.setState({
      expenses: expense,
    });
    console.log(expense);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
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
                value={this.state.type}
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
              type="date"
              name="description"
              value={this.state.description}
              placeholder="Description"
              onChange={this.handleChange}
            />
            <br />
            <input
              className="col-sm-6 col-md-3"
              type="text"
              name="date"
              value={this.state.date}
              placeholder="Date"
              onChange={this.handleChange}
            />
            <br />
            <input
              className="col-sm-6 col-md-3"
              type="text"
              name="amount"
              value={this.state.amount}
              placeholder="Amount"
              onChange={this.handleChange}
            />
            <br />
            <button>Submit</button>
          </form>
        </main>
        <Table data={this.state.expenses} />
      </div>
    );
  }
}
export default Form;
