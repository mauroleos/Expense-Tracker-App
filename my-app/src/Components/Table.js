import React from "react";

const Table = (props) => {
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
        <tbody>
          <tr>
            {props.data ? <td>{props.data.type}</td> : undefined}
            {props.data ? <td>{props.data.description}</td> : undefined}
            {props.data ? <td>{props.data.date}</td> : undefined}
            {props.data ? <td>{props.data.amount}</td> : undefined}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Table;
