import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {


  state = {
    transactions: [],
    searchTerm: ''

  }

  //delete a transaction
  //first creates a new array that removes the selected transactions
  //then deletes that transaction from the database
  //finally sets state to equal the array without the selected transaction
  deleteTransaction = (transaction) => {
    let currentTransactions = this.state.transactions.filter( transAct =>
      transaction.id != transAct.id)
     
    fetch(`http://localhost:6001/transactions/${transaction.id}`, {
      method: 'DELETE',
    })
    .then( resp => resp.json())
    .then( trans => {
      console.log(trans)
    })
    this.setState({
      transactions: currentTransactions
    })
    
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

    let displayedTransactions =[]
    //if search term does not equal ''
    displayedTransactions = this.state.transactions.filter( transaction =>
      transaction.description.startsWith(this.state.searchTerm))
    //else if filter alphabetically by category is selected
    //displayedTransaction = this.state.transactions.sort((a,b) => (a.category > b.category) ? 1 : -1 )
    return (
      <div>
        <button onClick={() => displayedTransactions = this.state.transactions.sort((a,b) => (a.category > b.category) ? 1 : -1 ) } >Filter By Category Alphabetically</button>
        <Search 
        searchQuery={this.searchQuery}/>
        <AddTransactionForm 
        addNewTransaction={this.addNewTransaction}/>
        <TransactionsList 
        deleteTransaction={this.deleteTransaction} 
        transactions={displayedTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
