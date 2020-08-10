import React, { Component } from "react";
import FormComponent from "./FormComponent";
import Table from "./Table";

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
      expense: {
        type: null,
        description: null,
        date: null,
        amount: null,
      },
    };
  }

  submitted = (e) => {
    e.preventDefault();
    const expense = {
      type: this.state.type,
      description: this.state.description,
      date: this.state.date,
      amount: this.state.amount,
    };
    console.log(expense);

    this.setState({
      expense: expense,
    });
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
        <FormComponent
          handleChange={this.handleChange}
          data={this.state}
          submitted={this.submitted}
        />
        <Table data={this.state.expense} />
      </div>
    );
  }
}

export default Form;
