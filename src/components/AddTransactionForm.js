	import React, { Component } from "react";

	class AddTransactionForm extends Component {
		state = {
			date: '',
			description: '',
			category: '',
			amount: ''
		}

		setDate = (e) => {this.setState({date: e.target.value})}
		setDescription = (e) => {this.setState({description: e.target.value})}
		setCategory = (e) => {this.setState({category: e.target.value})}
		setAmount = (e) => {this.setState({amount: e.target.value})}

		handleSubmit = (e) => {
			e.preventDefault()
			this.props.addTransaction(this.state)
			fetch('http://localhost:6001/transactions', {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: 'application/json'
				},
				body: JSON.stringify({
					date: this.state.date,
					description: this.state.description,
					category: this.state.category,
					amount: this.state.amount
				})
			})
		}

		render() {
			return (
			<div className="ui segment">
				<form className="ui form">
				<div className="inline fields">
					<input type="date" name="date" onChange={this.setDate}/>
					<input type="text" name="description" placeholder="Description" onChange={this.setDescription}/>
					<input type="text" name="category" placeholder="Category" onChange={this.setCategory}/>
					<input
						type="number"
						name="amount"
						placeholder="Amount"
						step="0.01"
						onChange={this.setAmount}
					/>
				</div>
				<button className="ui button" type="submit" onClick={this.handleSubmit}>
					Add Transaction
				</button>
				</form>
			</div>
			);
		}
	}

	export default AddTransactionForm;