import React, {Component} from 'react'

class Search extends Component {
	constructor() {
		super() 
		this.state = {
			search: ''
		}
		this.onInputChange = this.onInputChange.bind(this);
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
	}
	onInputChange(e) {
		console.log(e.target.value);
		this.setState({
			search: e.target.value
		})
	}
	onSearchSubmit(e) {
		e.preventDefault()
		let search = this.state.search
		this.props.createSearch(search)
		this.setState({
			search: ''
		})
	}
	render(){
		return (
			<div>
				<h2>Search for Giphy!</h2>
				<form onSubmit={ this.onSearchSubmit }>
				<input 
					onChange={ this.onInputChange }
					placeholder='Search for cats, moms, waffles, etc!'
					type='text'
					value={this.state.search} />
				<button type='submit'>Search</button>
				</form>
			</div>
		)
	}
}

export default Search