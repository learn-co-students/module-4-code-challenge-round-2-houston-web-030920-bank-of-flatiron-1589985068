import React, { Component } from "react";

class AddTransactionForm extends Component {

  state={
      date:'',
      description:'',
      category:'',
      amount:''
  }


  setDate=e=>{
    this.setState({
      date: e.target.value
    })
  }


  setDescription=e=>{
    this.setState({
      description: e.target.value
    })
  }

  setCategory=e=>{
    this.setState({
      category: e.target.value
    })
  }

  setAmount=e=>{
    this.setState({
      amount: e.target.value
    })
  }


  handleSubmit=(e)=>{
    e.preventDefault()
    console.log(this.state)
    fetch(`http://localhost:6001/transactions`,{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        date: this.state.date,
        description: this.state.description,
        category: this.state.category,
        amount: this.state.amount
      })
    })
    .then(res=>res.json())
    .then(t=> this.props.addTransaction(t))
   
  }



  render() {
    return (
      <div className="ui segment">
        <form className="ui form"  onSubmit={(e)=>{this.handleSubmit(e)}} >
          <div className="inline fields">
            <input type="date" value={this.state.date} 
            onChange={this.setDate}
            name="date" />
            <input type="text" value={this.state.description}
            onChange={this.setDescription}
            name="description" placeholder="Description" />
            <input type="text" value={this.state.category}
            onChange={this.setCategory}
            name="category" placeholder="Category" />
            <input
              type="number"
              value={this.state.amount}
              onChange={this.setAmount}
              name="amount"
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button className="ui button" 
          type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
