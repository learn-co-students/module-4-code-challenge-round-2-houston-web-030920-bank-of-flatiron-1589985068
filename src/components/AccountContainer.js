import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state={
    transactions:[],
    searchTerm:''
  }

  addTransaction=(t)=>{
     this.setState({
       transactions: [...this.state.transactions, t]
     })
  }

  searchTransaction=(e)=>{
    this.setState({
      searchTerm: e.target.value
    })
  }

  componentDidMount(){
    this.getTransactions()
  }

getTransactions=()=>{
  fetch(`http://localhost:6001/transactions`)
  .then(res=>res.json())
  .then(transactions=> this.setState({transactions: transactions}))
}

  render() {
    //finally working!! 
  let filteredTransactions= this.state.transactions.filter(transaction=> transaction.description.toUpperCase().startsWith(this.state.searchTerm.toUpperCase()))
    return (
      <div>
        <Search searchTransaction={this.searchTransaction}/>
        <AddTransactionForm addTransaction={this.addTransaction} />
        <TransactionsList transactions={filteredTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
