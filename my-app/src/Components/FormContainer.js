import React, { Component } from "react";
import Table from "./Table";
import Header from "./Header";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        type: "",
        description: "",
        date: "",
        amount: "",
      },
      expenses: [],
    };
    console.log(this.state.expenses);

    this.submitted = this.submitted.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validateForm() {
    if (
      this.state.form.type.length > 0 &&
      this.state.form.description.length > 0 &&
      this.state.form.date.length > 0 &&
      this.state.form.amount.length > 0
    ) {
      // console.log(this.state.form.description.length);
      return true;
    } else {
      alert("Form must be filled out completely");
      return false;
    }
  }

  // clearForm() {
  //   this.setState({
  //     form: {
  //       type: "",
  //       description: "",
  //       date: "",
  //       amount: "",
  //     },
  //   });
  // }

  submitted = (e) => {
    e.preventDefault();
    if (this.validateForm() === true) {
      const expense = {
        id: Math.random(),
        type: this.state.type,
        description: this.state.description,
        date: this.state.date,
        amount: this.state.amount,
        deleteButton: (
          <button
            className="btn btn-danger"
            onClick={() => this.deleteButton(expense.id)}
          >
            X
          </button>
        ),
      };

      this.setState({
        expenses: [...this.state.expenses, expense],
      });
      e.target.reset();
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    const copyForm = Object.assign({}, this.state.form);
    copyForm[name] = value;

    this.setState({
      form: copyForm,
    });
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
            <div>
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
              <button
                className="btn btn-primary"
                onChange={this.formComplete}
                onClick={this.clearForm}
              >
                Submit
              </button>
            </div>
          </form>
        </main>
        <Table expenses={this.state.expenses} />
      </div>
    );
  }
}
export default Form;
