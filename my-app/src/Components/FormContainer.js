import React, { Component } from "react";
import Table from "./Table";
import Header from "./Header";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      disabled: true,
      form: {
        type: "",
        description: "",
        date: "",
        amount: "",
      },
      expenses: [],
    };

    this.submitted = this.submitted.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const formIsInvalid = [
  //     this.state.form.type === "",
  //     this.state.form.description === "",
  //     this.state.form.date === "",
  //     this.state.form.amount === "",
  //   ];
  //   console.log(formIsInvalid);

  //   if (prevState.disabled !== formIsInvalid) {
  //     this.setState({
  //       disabled: formIsInvalid === true,
  //     });
  //   }
  // }

  componentDidUpdate(prevProps, prevState) {
    const typeIsInvalid = this.state.form.type === "";
    const descriptionIsInvalid = this.state.form.description === "";
    const dateIsInvalid = this.state.form.date === "";
    const amountIsInvalid = this.state.form.amount === "";

    console.log(amountIsInvalid);

    if (
      prevState.disabled !== typeIsInvalid &&
      prevState.disabled !== descriptionIsInvalid &&
      prevState.disabled !== dateIsInvalid &&
      prevState.disabled !== amountIsInvalid
    ) {
      this.setState({
        disabled: [
          typeIsInvalid === true,
          descriptionIsInvalid === true,
          dateIsInvalid === true,
          amountIsInvalid === true,
        ],
      });
    }
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
                disabled={this.state.disabled}
                onChange={this.formComplete}
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
