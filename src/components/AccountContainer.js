import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Sort from "./Sort"

class AccountContainer extends Component {
  render() {
    return (
      <div>
        <Search searchRes={this.props.searchRes}/>
        <AddTransactionForm onSubmit={this.props.onSubmit}/>
        <Sort sortTrans={this.props.sortTrans}/>
        <TransactionsList transactions={this.props.transactions} onDelete={this.props.onDelete}/>
      </div>
    );
  }
}

export default AccountContainer;
