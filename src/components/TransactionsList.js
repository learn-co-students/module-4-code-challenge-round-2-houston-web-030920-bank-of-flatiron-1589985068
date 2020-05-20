import React, {Component} from "react";
import Transaction from "./Transaction";

class TransactionsList extends Component {
  
  deleteTransaction = (id) => {
    this.props.deleteTransaction(id)
  }
  render () {
    let transactions = this.props.transactions
    // let sortTransaction = this.props.sortTransaction === 'category' ? transactions.sort((a,b) => a.category.toLowerCase() > b.category.toLowerCase()) ? 1 : -1) : ''
    let transactionsCollection = transactions.filter(transaction => transaction.category.startsWith(this.props.searchQuery))
    return (
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
              <h3 className="ui center aligned header">Delete Transaction</h3>
            </th>
          </tr>
            {transactionsCollection.map(transaction => (     
              <Transaction 
                key={transaction.id} transaction={transaction}
                deleteTransaction={this.deleteTransaction}
                />
            ))}
          
        </tbody>
      </table>
  );
}
};

export default TransactionsList;
