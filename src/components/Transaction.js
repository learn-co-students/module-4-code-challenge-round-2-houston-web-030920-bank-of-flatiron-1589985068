import React from "react";

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.transaction.date}</td>
      <td>{props.transaction.description}</td>
      <td>{props.transaction.category}</td>
      <td>{props.transaction.amount}</td>
      <button onClick={()=> props.onDelete(props.transaction)}>Delete transaction</button>
    </tr>
    
  );
};

export default Transaction;
