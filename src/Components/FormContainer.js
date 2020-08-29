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
      return true;
    } else {
      alert("Form must be filled out completely");
      return false;
    }
  }

  submitted = (e) => {
    e.preventDefault();
    if (this.validateForm() === true) {
      const expense = {
        id: Math.random(),
        type: this.state.form.type,
        description: this.state.form.description,
        date: this.state.form.date,
        amount: this.state.form.amount,
        deleteButton: (
          <button
            className="btn btn-danger"
            onClick={() => this.deleteButton(expense.id)}
          >
            &times;
          </button>
        ),
      };

      this.setState({
        expenses: [...this.state.expenses, expense],
        form: {
          type: "",
          description: "",
          date: "",
          amount: "",
        },
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
              <div>
                <div className="row">
                  <label>
                    <select
                      style={{ marginTop: "10px" }}
                      className="col-sm"
                      style={{ textAlign: "center" }}
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
                </div>
              </div>
              <br />
              <div style={{ padding: "40px" }}>
                <div className="row">
                  <input
                    style={{ textAlign: "center" }}
                    className="col-sm"
                    type="text"
                    name="description"
                    value={this.state.form.description}
                    placeholder="Description"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <br />
              <div style={{ padding: "40px" }}>
                <div className="row">
                  <input
                    style={{ textAlign: "center" }}
                    className="col-sm"
                    type="date"
                    name="date"
                    value={this.state.form.date}
                    placeholder="Date"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <br />
              <div style={{ padding: "40px" }}>
                <div className="row">
                  <input
                    style={{ textAlign: "center" }}
                    className="col-sm"
                    type="number"
                    name="amount"
                    value={this.state.form.amount}
                    placeholder="Amount"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <br />
              <div style={{ textAlign: "center" }}>
                <div className="row">
                  <button onChange={this.submitted} className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </main>
        <Table expenses={this.state.expenses} />
      </div>
    );
  }
}
export default Form;
