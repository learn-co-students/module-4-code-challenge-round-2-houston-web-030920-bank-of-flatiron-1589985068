import React, { Component } from "react";

class AddTransactionForm extends Component {
  constructor(){
    super()
    this.state = {
      date: '',
      description: '',
      category: '',
      amount: 0
    }
  }
  
  setDate = (e) => this.setState({ date: e.target.value })
  setDescription = (e) => this.setState({ description: e.target.value })
  setCategory = (e) => this.setState({ category: e.target.value })
  setAmount = (e) => this.setState({ amount: e.target.value })

  handleSubmit = (e) => {
    e.preventDefault()
    let transaction = {
      date: this.state.date,
      description: this.state.description,
      category: this.state.category,
      amount: this.state.amount
    }
    this.props.new(transaction)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input onChange={this.setDate} type="date" name="date" />
            <input onChange={this.setDescription} type="text" name="description" placeholder="Description" />
            <input onChange={this.setCategory} type="text" name="category" placeholder="Category" />
            <input
              onChange={this.setAmount}
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button onClick={this.handleSubmit} className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
