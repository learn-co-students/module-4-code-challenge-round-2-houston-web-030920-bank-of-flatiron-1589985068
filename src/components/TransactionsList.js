import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
	let handleCategorySort = (e, transactions) => {
		e.preventDefault()
		props.sortByCategory(transactions)
	}

	let handleDescriptionSort = (e, transactions) => {
		e.preventDefault()
		props.sortByDescription(transactions)
	}

	let transactions = props.transactions.filter(transaction => transaction.description.includes(props.searchTerm))

	return (
		<div>
			<div className="ui segment">
				<h3>Sort By:</h3>
				<button className="ui button" type="submit" onClick={handleCategorySort}>Category</button>
				<button className="ui button" type="submit" onClick={handleDescriptionSort}>Description</button>
			</div>
			<table className="ui celled striped padded table">
				<tbody>
					<tr>
					<th>
						<h3 className="ui center aligned header">Date</h3>
					</th>
					<th>
						<h3 className="ui center aligned header">Description</h3>
					</th>
					<th>
						<h3 className="ui center aligned header">Category</h3>
					</th>
					<th>
						<h3 className="ui center aligned header">Amount</h3>
					</th>
					<th>
						<h3 className="ui center aligned header">Options</h3>
					</th>
					</tr>
					{transactions.map(transaction => <Transaction transaction={transaction} deleteTransaction={props.deleteTransaction}/>)}
				</tbody>
			</table>
		</div>
	);
};

export default TransactionsList;
