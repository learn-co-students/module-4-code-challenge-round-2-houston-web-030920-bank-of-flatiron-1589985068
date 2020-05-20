import React, { Component } from "react";

class AddTransactionForm extends Component {

  //establish a state for each individual transaction
  state = {
    date: '',
    description: '',
    category: '',
    amount: ''
  }

  //create the newTransAct obj using values from the form
  setField = (e) => {
    this.setState({
      [e.target.name]: e.target.value

    })
  }

  //call function addNewTransaction in the account container component
  submitTransaction = (e) => {
    e.preventDefault()

    this.props.addNewTransaction(this.state)
    //reset the form to empty
    // this.setState({
    //   date: '',
    //   description: '',
    //   category: '',
    //   amount: ''
    // })
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={(e) => this.submitTransaction(e)}>
          <div className="inline fields">
            <input type="date" name="date" onChange={this.setField}/>
            <input type="text" name="description" onChange={this.setField} placeholder="Description" />
            <input type="text" name="category" onChange={this.setField} placeholder="Category" />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={this.setField}
            />
          </div>
          <button className="ui button" type="submit"
          >
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
