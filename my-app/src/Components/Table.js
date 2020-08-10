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
            {props.data ? <td>{props.data.type}</td> : null}
            {props.data ? <td>{props.data.description}</td> : null}
            {props.data ? <td>{props.data.date}</td> : null}
            {props.data ? <td>{props.data.amount}</td> : null}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
