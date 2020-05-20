import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
	render() {
		return (
		<div>
			<Search setSearchTerm={this.props.setSearchTerm}/>
			<AddTransactionForm addTransaction={this.props.addTransaction}/>
			<TransactionsList 
				transactions={this.props.transactions} 
				searchTerm={this.props.searchTerm}
				deleteTransaction={this.props.deleteTransaction}
				sortByCategory={this.props.sortByCategory}
				sortByDescription={this.props.sortByDescription}
			/>
		</div>
		);
	}
}

export default AccountContainer;
