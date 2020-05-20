import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Sort from "./Sort";

class AccountContainer extends Component {
  
  state = {
    transactions: [],
    searchQuery: '',
    sortChoice: ''
  }
  
  componentDidMount () {
    fetch( 'http://localhost:6001/transactions')
    .then(resp => resp.json())
    .then(obj => this.setState({transactions: obj}))
  }
  
  addNewTransaction = (formState) => {
    fetch( 'http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        date: formState.date,
        description: formState.description,
        category: formState.category,
        amount: formState.amount
      })
    })
  }
  
  searchTransaction = (searchQuery) => {
    this.setState({searchQuery: searchQuery})
  }
  
  sortTransaction = (e, data) => {
    this.setState({sortChoice: data.value})
  }
  
  deleteTransaction = (id) => {
    fetch( `http://localhost:6001/transactions/${id}`, {
      method: 'DELETE'  })
    }
  
  render() {
    return (
      <div>
        <Search searchTransaction={this.searchTransaction}/>
        <Sort sortTransaction={this.sortTransaction}/>
        <AddTransactionForm addNewTransaction={this.addNewTransaction}/>
        <TransactionsList 
          transactions={this.state.transactions} 
          searchQuery={this.state.searchQuery} 
          sortTransaction={this.sortTransaction}
          deleteTransaction={this.deleteTransaction}
          />
          
      </div>
    );
  }
}

export default AccountContainer;
