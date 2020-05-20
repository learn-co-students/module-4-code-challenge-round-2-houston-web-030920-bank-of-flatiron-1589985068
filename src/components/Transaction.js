import React from "react";

const Transaction = (prop) => {
  const { transaction } = prop
  
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <button 
      onClick={() => prop.delete(transaction)} 
      className="del-btn"
      >Delete Transaction</button>
    </tr>
  );
};


export default Transaction;
