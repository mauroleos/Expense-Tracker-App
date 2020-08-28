import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap";

const Table = (props) => {
  const expenseRows = [
    props.expenses.map((expense) => {
      return (
        <tr key={expense.id}>
          <td>{expense.type}</td>
          <td>{expense.description}</td>
          <td>{expense.date}</td>
          <td>{expense.amount}</td>
          <td>{expense.deleteButton}</td>
        </tr>
      );
    }),
  ];

  return (
    // console.log(expenseRows),
    <div className="container">
      <table className="table table-bordered table-hover">
        <thead className="thead-light">
          <tr>
            <th className="list">Type</th>
            <th>Description</th>
            <th>Date</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{expenseRows}</tbody>
      </table>
    </div>
  );
};
export default Table;
