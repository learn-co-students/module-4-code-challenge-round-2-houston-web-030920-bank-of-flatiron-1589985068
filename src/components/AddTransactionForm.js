import React, { Component } from "react";


class AddTransactionForm extends Component {

  state = {
    date: '',
    description: '',
    category:  '',
    amount: ''
  }
  
  dateInput = (e) => {
    this.setState({
      date: e
    })
  }

  descriptionInput = (e) => {
    this.setState({
      description: e
    })
  }

  categoryInput = (e) => {
    this.setState({
      category: e
    })
  }

  amountInput = (e) => {
    this.setState({
      amount: e
    })
  }

  updateTransactionList = (e) =>{
    e.preventDefault()
    console.log(this.state)
    this.props.createTransaction(this.state)

  }





  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input onChange={(e) => this.dateInput(e.target.value)} type="date" name="date" />
            <input onChange={(e) => this.descriptionInput(e.target.value)} type="text" name="description" placeholder="Description" />
            <input onChange={(e) => this.categoryInput(e.target.value)} type="text" name="category" placeholder="Category" />
            <input
              onChange={(e) => this.amountInput(e.target.value)}
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button onClick={this.updateTransactionList} className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
