import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
  <h3 className="ui center aligned header">{props.transaction.date}</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">{props.transaction.description}</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">{props.transaction.category}</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">{props.transaction.amount}</h3>
          </th>
        </tr>
        {/* render Transactions here */}
      </tbody>
    </table>
  );
};

export default TransactionsList;
