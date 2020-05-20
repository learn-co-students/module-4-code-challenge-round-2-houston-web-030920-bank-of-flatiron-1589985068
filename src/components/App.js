import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {

  state = {
    transactions: [],
    searchTerm: ''
  }

  componentDidMount(){
    fetch("http://localhost:6001/transactions")
    .then(res => res.json())
    .then(transactions => (
      this.setState({transactions: transactions})
    ))
  }

  createTrans = (trans) => {
    console.log(trans)
		fetch("http://localhost:6001/transactions", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(trans)
		})
    .then(res => res.json())
    .then(transaction => (
      this.setState({transactions: [...this.state.transactions, transaction]})
    ))
  }

  searchRes = (searchTerm) => {
		this.setState({
			searchTerm: searchTerm
		})
	}

  onDelete = (trans) => {
    let delTrans = trans
		fetch(`http://localhost:6001/transactions/${trans.id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(trans)
    })
    this.setState({
      transactions: this.state.transactions.filter(tran => (
        tran != delTrans
      ))
    })
  }

  compareDesc = (a, b) => {
    let comparison = 0;
    if (a.description > b.description) {
      comparison = 1;
    } else if (a.description < b.description) {
      comparison = -1;
    }
    return comparison;
  }

  compareCat = (a, b) => {
    let comparison = 0;
    if (a.category > b.category) {
      comparison = 1;
    } else if (a.category < b.category) {
      comparison = -1;
    }
    return comparison;
  }

  sortTrans = (sortTerm) => {
    if(sortTerm === "Description"){
      this.setState({
        transactions: this.state.transactions.sort(this.compareDesc)
      })
    }else if(sortTerm === "Category"){
      this.setState({
        transactions: this.state.transactions.sort(this.compareCat)
      })
    }
  }

  render() {
    let searchResults = this.state.transactions.filter(
			trans => trans.description.toLowerCase().startsWith(this.state.searchTerm)
		)
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer 
          transactions={searchResults} 
          onSubmit={this.createTrans}
          searchRes={this.searchRes}
          onDelete={this.onDelete}
          sortTrans={this.sortTrans}
        />
      </div>
    );
  }
}

export default App;
