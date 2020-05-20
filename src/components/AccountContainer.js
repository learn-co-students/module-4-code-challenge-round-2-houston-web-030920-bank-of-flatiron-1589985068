import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
      transactions: [],
      searchQuery: ''
  }

  componentDidMount() {
      fetch('http://localhost:6001/transactions')
      .then(resp => resp.json())
      .then(data => {
          this.setState({
              transactions: data
          })
      })
  }

  handleSubmit = (e, newTransaction) => {
    e.preventDefault()
    fetch('http://localhost:6001/transactions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newTransaction)
    })
    .then(resp => resp.json())
    .then(data => {
        this.setState({
            transactions: [...this.state.transactions, data]
        })
    })
  }

  handleSearch = (e) => {
    this.setState({
        searchQuery: e.target.value
    })
  }

  handleDelete = (selection) => {
      console.log(selection.id)
      fetch(`http://localhost:6001/transactions/${selection.id}`, {
          method: 'DELETE'
      })
      this.setState({
        transactions: this.state.transactions.filter(transaction => transaction.id !== selection.id)
    })
  }
  
  
  // not working yet
  handleFilter = (filter) => {
    console.log(filter)
  }

  render() {
    let filteredTransactions = this.state.transactions.filter(
        transaction => transaction.description.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    )
    return (
      <div>
        <Search search={this.handleSearch}/>
        <AddTransactionForm submit={this.handleSubmit}/>
        <TransactionsList transactions={filteredTransactions} delete={this.handleDelete} filter={this.handleFilter}/>
      </div>
    );
  }
}

export default AccountContainer;
