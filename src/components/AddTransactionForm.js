import React, { Component } from "react";

class AddTransactionForm extends Component {


  state = {
    newTransactionDate: null,
    newTransactionDescription: null,
    newTransactionCategory: null,
    newTransactionAmount: null
  }

  setTransactionDate = (e) =>{
    this.setState({newTransactionDate: e.target.value})
  }

  setTransactionDescription = (e) =>{
    this.setState({newTransactionDescription: e.target.value})
  }

  setTransactionCategory = (e) =>{
    this.setState({newTransactionCategory: e.target.value})
  }

  setTransactionAmount = (e) =>{
    this.setState({newTransactionAmount: e.target.value})
  }

  getTransactionObject = (e) => {
    e.preventDefault()

    let newTransaction = {
      date: this.state.newTransactionDate,
      description: this.state.newTransactionDescription,
      category: this.state.newTransactionCategory,
      amount: this.state.newTransactionAmount
    }

    this.props.newTransaction(newTransaction)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input onChange={(e) => this.setTransactionDate(e)} type="date" name="date" />
            <input onChange = {(e) => this.setTransactionDescription(e)} type="text" name="description" placeholder="Description" />
            <input onChange = {(e) => this.setTransactionCategory(e)} type="text" name="category" placeholder="Category" />
            <input
              onChange = {(e) => this.setTransactionAmount(e)}
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button 
          onClick = {(e) => this.getTransactionObject(e)}
          className="ui button" 
          type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
