import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Sort from './Sort'

class AccountContainer extends Component {
  state ={
    transactions: [],
    query: ''
  }

//search transactions
searchTransactions = (e) => {
  this.setState({ query: e.target.value })
}

//did the transaction load
componentDidMount(){
  this.loadTransactions()
}

//load transactions from backend 
loadTransactions = () =>{
  fetch('http://localhost:6001/transactions')
  .then(resp=>resp.json())
  .then(transactions => {
    this.setState({
      transactions: transactions
    })
  })
}

//add transaction
newTransaction = (transaction) => {
  fetch('http://localhost:6001/transactions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      date: transaction.date,
      description: transaction.description,
      category: transaction.category,
      amount: transaction.amount
    })
  })
  .then(resp=>resp.json())
  .then(transaction => {
    this.setState({ transactions: [
      ...this.state.transactions, 
      transaction
    ]
  })
  })
}

//delete transaction
deleteTransaction = (transaction) => {
  fetch(`http://localhost:6001/transactions/${transaction.id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(resp =>{
      this.loadTransactions()
    })
}


  render() {
    let filteredTransactions = this.state.transactions.filter(
      transaction => transaction.description.toLowerCase().includes(this.state.query))
    return (
      <div>
        <Search search={this.searchTransactions}/>
        <Sort transactions={filteredTransactions} />
        <AddTransactionForm new={this.newTransaction}/>
        <TransactionsList 
        transactions={filteredTransactions}
        delete = {this.deleteTransaction}
        />
      </div>
    );
  }
}

export default AccountContainer;
