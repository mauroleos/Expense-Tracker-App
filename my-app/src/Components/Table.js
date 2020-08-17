import React from "react";

const Table = (props) => {
  const expenseRows = [
    props.expenses.map((expense) => {
      return (
        <tr>
          <td>{expense.id}</td>
          <td>{expense.type}</td>
          <td>{expense.description}</td>
          <td>{expense.date}</td>
          <td>{expense.amount}</td>
        </tr>
      );
    }),
  ];
  console.log(expenseRows);

  return (
    <div className="container">
      <table className="table table-bordered table-hover">
        <thead className="thead-light">
          <tr>
            <th className="list">Type</th>
            <th>Description</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>{expenseRows}</tbody>
      </table>
    </div>
  );
};
export default Table;
