import React, {Component} from 'react'

class Search extends Component {
	render(){
		return (
			<form onSubmit={ this.props.onSearchSubmit }>
			<input 
				onChange={ this.props.onInputChange }
				placeholder='Search for cats, moms, waffles, etc!'
				type='text'
				value={this.props.query} />
			<input type='submit' value="Search"/>
			</form>
		)
	}
}

export default Search