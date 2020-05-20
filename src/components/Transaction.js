import React from "react";

const Transaction = (props) => {

  const handleClick = (e) => {
    e.preventDefault()
    props.deleteTransaction(props.transaction)
    fetch(`http://localhost:6001/transactions/${props.transaction.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  return (
    <tr>
      <td>{props.transaction.date}</td>
      <td>{props.transaction.description}</td>
      <td>{props.transaction.category}</td>
      <td>{props.transaction.amount}</td>
      <td><button className="ui button" type="submit" onClick={handleClick}>Delete</button></td>
    </tr>
  );
};

export default Transaction;
