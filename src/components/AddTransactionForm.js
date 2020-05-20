import React, { Component } from "react";

class AddTransactionForm extends Component {
  state ={
    date: '',
    description: '',
    category: '',
    amount: ''
  }
  
  setDate = e => this.setState({date: e.target.value}) 
  setDescription = e => this.setState({description: e.target.value})
  setCategory = e => this.setState({category: e.target.value})
  setAmount = e => this.setState({amount: e.target.value})
  
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={() => this.props.addNewTransaction(this.state)}>
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.setDate}/>
            <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.setDescription}/>
            <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={this.setCategory}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01" value={this.state.amount} onChange={this.setAmount}
            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
