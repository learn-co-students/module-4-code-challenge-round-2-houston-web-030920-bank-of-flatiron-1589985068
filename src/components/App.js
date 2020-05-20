import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {
	state = {
		transactions: [],
		searchTerm: ''
	}

	componentDidMount() {
		fetch('http://localhost:6001/transactions')
		.then(resp => resp.json())
		.then(transactions => {
			this.setState({
			transactions: transactions
			})
		})
	}

	setSearchTerm = (e) => {
		this.setState({
			searchTerm: e.target.value
		})
	}

	addTransaction = (newTransaction) => {
		this.setState({
		transactions: [...this.state.transactions, newTransaction]
		})
	}

	deleteTransaction = (deletedTransaction) => {
		this.setState({
			transactions: this.state.transactions.filter(transaction => transaction !== deletedTransaction)
		})
	}

	sortByCategory = (transactions) => {
		this.setState({
			transactions : this.state.transactions.sort((a,b) => a.category - b.category )
		})
		transactions = this.state.transactions
	}

	sortByDescription = (transactions) => {
		this.setState({
			transactions : this.state.transactions.sort((a,b) => a.description - b.description )
		})
		transactions = this.state.transactions
	}

	render() {
		console.log(this.state.searchTerm)
		return (
		<div className="ui raised segment">
			<div className="ui segment violet inverted">
			<h2>The Royal Bank of Flatiron</h2>
			</div>
			<AccountContainer 
				transactions={this.state.transactions}
				searchTerm={this.state.searchTerm}
				setSearchTerm={this.setSearchTerm}
				addTransaction={this.addTransaction}
				deleteTransaction={this.deleteTransaction}
				sortByCategory={this.sortByCategory}
				sortByDescription={this.sortByDescription}
			/>
			</div>
		);
	}
}

export default App;
