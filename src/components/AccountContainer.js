import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state= {
    transactions: [],
    searchTerm: '',
    filteredTrans: []
  }
  
  componentDidMount(){
    this.getTransactions()
  }

  getTransactions = () => {
    fetch("http://localhost:6001/transactions")
    .then(resp => resp.json())
    .then(transactions => (
      this.setState ({transactions:transactions, filteredTrans:transactions})
    ))
  }

  handleSearch = (e) => {
    this.setState({
      filteredTrans: this.state.transactions.filter(transaction=>transaction.description.includes(e.target.value))
    })
  }

  handleDelete = (deleteTrans) => {
    fetch (`http://localhost:6001/transactions/${deleteTrans.id}`,{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    this.setState({
      transactions: this.state.transactions.filter(transaction => transaction !== deleteTrans),
      filteredTrans: this.state.transactions.filter(transaction => transaction !== deleteTrans)
    })
    {console.log(this.state.filteredTrans)}
  }

  render() {
    return (
      <div>
        <Search search={this.handleSearch}/>
        <AddTransactionForm getTransactions={this.getTransactions}/>
        <TransactionsList transactions={this.state.filteredTrans} onDelete={this.handleDelete}/>
      </div>
    );
  }
}

export default AccountContainer;
