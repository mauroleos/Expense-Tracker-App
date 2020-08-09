import React from "react";

function FormComponent(props) {
  return (
    <main>
      <form>
        <label>
          Type:
          <select
            value={props.data.type}
            onChange={props.handleChange}
            name="type"
          >
            <option value="">-- Please Choose a Type --</option>
            <option value="Card">Card</option>
            <option value="Cash">Cash</option>
            <option value="Cryptocoin">Cryptocoin</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <br />
        <input
          type="text"
          value={props.data.description}
          name="description"
          placeholder="Description"
          onChange={props.handleChange}
        />
        <br />
        <input
          type="text"
          value={props.data.date}
          name="date"
          placeholder="Date"
          onChange={props.handleChange}
        />
        <br />
        <input
          type="text"
          value={props.data.amount}
          name="amount"
          placeholder="Amount"
          onChange={props.handleChange}
        />
        <button>Submit</button>
      </form>
    </main>
  );
}

export default FormComponent;
