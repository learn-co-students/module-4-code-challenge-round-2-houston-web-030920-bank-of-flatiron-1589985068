import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {

    state = {
      transactions: null,
      searchTerm: ''
    }

    componentDidMount(){
      fetch('http://localhost:6001/transactions')
        .then(resp => resp.json())
        .then(transactions => this.setState({transactions: transactions}))
    }

    setSearchTerm = (e) => {
      console.log('This is the search term changing')

      this.setState({searchTerm: e.target.value})
    }

    deleteTransaction = (selectedTransaction) => {
      console.log("I want to delete this", selectedTransaction)
      // I was so close :(
      // No time, stupid header(s)
      //But I was going to do a fetch request to delete the selectedTransaction url
      // fetch('http://localhost:6001/transactions/`${selectedTransaction.id}`',{
      //   method: 'DELETE',
      // })
      //.then(resp => resp.json())
    }

    newTransaction = (newTransaction) => {
      console.log('New Transaction Recieved: ', newTransaction)
      
      this.setState({transactions: [...this.state.transactions, newTransaction]})

      fetch('http://localhost:6001/transactions',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify( {
          date: newTransaction.date,
          amount: newTransaction.amount,
          description: newTransaction.description,
          category: newTransaction.category
        })
      })
      
    }

  

  render() {
    if(this.state.transactions === null)
    {
      return null
    }
    else{
      console.log(this.state.transactions)
      //WHAAATT IS GOING ON
      let filteredTransactions = this.state.transactions.filter((transaction) => transaction.description.includes(this.state.searchTerm))
      console.log(filteredTransactions)
      return (
        
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer
          newTransaction = {this.newTransaction} 
          transactions = {filteredTransactions}
          setSearchTerm = {this.setSearchTerm}
          deleteTransaction = {this.deleteTransaction}
        />
      </div>
    );}
  }
}

export default App;
