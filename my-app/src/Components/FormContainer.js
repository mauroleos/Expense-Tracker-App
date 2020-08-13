import React, { Component } from "react";
import FormComponent from "./FormComponent";
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
      expenses: [
        {
          id: null,
          type: null,
          description: null,
          date: null,
          amount: null,
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitted = this.submitted.bind(this);
  }

  submitted = (e) => {
    e.preventDefault();

    let expenseList = [...this.state.expenses];

    const expense = {
      id: this.state.id,
      type: this.state.type,
      description: this.state.description,
      date: this.state.date,
      amount: this.state.amount,
    };

    expenseList.push(expense);

    this.setState({
      expenses: expenseList,
    });
    console.log(expense);
    console.log(expenseList);
    console.log(this.state.expenses);
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
        <FormComponent
          handleChange={this.handleChange}
          data={this.state.form}
          submitted={this.submitted}
        />
        <Table data={this.state.expenses} id={this.state.id} />
      </div>
    );
  }
}

export default Form;
