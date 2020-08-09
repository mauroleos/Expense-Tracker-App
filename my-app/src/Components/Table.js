import React from "react";

function Table(props) {
  return (
    <div className="container">
      <table className="table table-bordered table-hover">
        <thead className="thead-light">
          <tr>
            <th>Type</th>
            <th>Description</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.data.type}</td>
            <td>{props.data.description}</td>
            <td>{props.data.date}</td>
            <td>{props.data.amount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
