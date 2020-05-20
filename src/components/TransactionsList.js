import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  return (
    <div>
      <label>Filter By: </label>
      <select onChange={(e) => props.filter(e.target.value)}>
          <option>--</option>
          <option value='category'>Category</option>
          <option value='description'>Description</option>
        </select>
      <table className="ui celled striped padded table">
        <tbody>
          <tr>
            <th>
              <h3 className="ui center aligned header">Date</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Description</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Category</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Amount</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Delete</h3>
            </th>
          </tr>
          {props.transactions.map(transaction => <Transaction transaction={transaction} key={transaction.id} delete={props.delete}/>)}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsList;
