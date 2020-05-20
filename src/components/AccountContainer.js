import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
 
 
 
  render() {
    return (
      <div>
        <Search 
        charactersTyped={this.props.charactersTyped}
        />

        <AddTransactionForm 
        createTransaction={this.props.createTransaction}
        />
        {this.props.transactionArray.map( transaction => 
        <TransactionsList 
          transaction={transaction}
          key={transaction.id}
        />
        )}
      </div>
    );
  }
}

export default AccountContainer;
