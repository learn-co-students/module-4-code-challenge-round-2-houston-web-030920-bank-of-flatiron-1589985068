import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {


  state = {
    transactions: [],
    searchTerm: ''

  }

  //search functionallity
  searchQuery = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm
    })
  }

  //add new transaction 
  addNewTransaction = (newTransAct) => {
    fetch(`http://localhost:6001/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        date: newTransAct.date,
        description: newTransAct.description,
        category: newTransAct.category,
        amount: newTransAct.amount
      })
    })
    .then(resp => resp.json())
    .then( newTrans => {
      this.setState({
        transactions: [...this.state.transactions, newTrans]
      })
    })
  }

  //fetch transactions from the database
  componentDidMount = () => {
    fetch(`http://localhost:6001/transactions`)
      .then( resp => resp.json())
      .then( fetchedTransactions => {
        this.setState({
          transactions: fetchedTransactions
        })
      })
  }
  render() {
    if(this.state.transactions.length == 0){
      return <h1>fetching transactions...</h1>
    }
    //filter the transactions by the search term provided
    //by the callback function called in Search that resets the
    //current state of search term
    //pass that array as the props to transaction list because 
    //it will always be accurate
    let displayedTransactions = this.state.transactions.filter( transaction =>
      transaction.description.startsWith(this.state.searchTerm))
    return (
      <div>
        <Search searchQuery={this.searchQuery}/>
        <AddTransactionForm addNewTransaction={this.addNewTransaction}/>
        <TransactionsList transactions={displayedTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
