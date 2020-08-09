import React, { Component } from "react";
import FormComponent from "./FormComponent";
import Table from "./Table";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      type: "",
      description: "",
      date: "",
      amount: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit() {}

  render() {
    return (
      <div>
        <FormComponent handleChange={this.handleChange} data={this.state} />
        <Table data={this.state} />
      </div>
    );
  }
}

export default Form;
