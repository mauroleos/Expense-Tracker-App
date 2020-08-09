// import React, { Component } from "react";

// class ExpenseTrackerForm extends Component {
//   constructor() {
//     super();
//     this.state = {
//       form: {
//         type: "",
//         description: "",
//         date: "",
//         amount: "",
//       },
//       expense: null,
//     };
//   }

//   submitted = (e) => {
//     e.preventDefault();
//     const expense = {
//       type: this.state.form.type,
//       description: this.state.form.description,
//       date: this.state.form.date,
//       amount: this.state.form.amount,
//     };
//     this.setState({
//       expense: expense,
//     });
//   };

//   changeInfo = (e) => {
//     this.setState({
//       form: {
//         ...this.state.form,
//         description: e.target.value,
//         date: e.target.value,
//         amount: e.target.value,
//       },
//     });
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.submitted}>
//           <label>
//             Type:
//             <select>
//               <option value="Card">Card</option>
//               <option value="Cash">Cash</option>
//               <option value="Cryptocoin">Cryptocoin</option>
//               <option value="Other">Other</option>
//             </select>
//           </label>
//           Description:{" "}
//           <input
//             type="text"
//             placeholder="What did you spend it on"
//             onChange={this.changeInfo}
//           ></input>
//           <br />
//           Date:{" "}
//           <input
//             type="text"
//             placeholder="Date"
//             // value={this.form.date}
//             onChange={this.changeInfo}
//           ></input>
//           Amount:
//           <input
//             type="text"
//             placeholder="Amount"
//             // value={this.form.amount}
//             onChange={this.changeInfo}
//           ></input>
//           <br />
//           <button>Submit</button>
//         </form>
//         {this.state.expense ? <h1>{this.state.expense.description}</h1> : null}
//         {this.state.expense ? <h2>{this.state.expense.date}</h2> : null}
//         {this.state.expense ? <h2>{this.state.expense.amount}</h2> : null}
//       </div>
//     );
//   }
// }

// export default ExpenseTrackerForm;

import React, { Component } from "react";
import FormComponent from "./FormComponent";

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
    return <FormComponent handleChange={this.handleChange} data={this.state} />;
  }
}

export default Form;
