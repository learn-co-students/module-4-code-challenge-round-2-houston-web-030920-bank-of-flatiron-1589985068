import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {

  state = {
    transactions: [],
    charactersTyped: ""
  }

  charactersTyped = (letters) => {
    this.setState({
      charactersTyped: letters
    })
  }


  capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  } 

  componentDidMount() {
    fetch('http://localhost:3000/transactions')
    .then(res => res.json())
    .then(transactionsArray => this.setState({
      transactions: transactionsArray
    }))
  }

  createTransaction = (newTransaction) => {
    fetch('http://localhost:3000/transactions', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        date: newTransaction.date,
        description: newTransaction.description,
        category: newTransaction.category,
        amount: newTransaction.amount
      })
    })
    .then(res => res.json())
    .then(newTransaction => 
      console.log(newTransaction.description.toUpperCase()),
      newTransaction.description.toUpperCase(),
      this.setState({
      transaction: this.state.transactions.push(newTransaction)
    })
    )
   
  }
 



  render() {
    
    console.log(this.state.transactions)
    
    let transactionToRender = this.state.transactions.filter(transaction => transaction.description.startsWith(this.state.charactersTyped))
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer 
        charactersTyped={this.charactersTyped}
        createTransaction={this.createTransaction}
        transactionArray={transactionToRender}
        />
      </div>
    );
  }
}

export default App;
