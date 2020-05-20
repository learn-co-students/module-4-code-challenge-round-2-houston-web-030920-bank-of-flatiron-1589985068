import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: '',
    description: '',
    category: '',
    amount: ''
  }

  inputs = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.setState({
      date: '',
      description: '',
      category: '',
      amount: ''
    })
  }

  // coundnt get the state to clear back up after a new transaction, not sure why?

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={(e) => this.handleSubmit(e)}>
          <div className="inline fields">
            <input type="date" name="date" onChange={this.inputs}/>
            <input type="text" name="description" placeholder="Description" onChange={this.inputs}/>
            <input type="text" name="category" placeholder="Category" onChange={this.inputs}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={this.inputs}
            />
          </div>
          <button className="ui button" type="submit" >
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
