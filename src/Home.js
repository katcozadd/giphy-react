import React, { Component } from 'react';
import SearchContainer from "./containers/SearchContainer"

class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>Search for Giphy's!</h1>
        <SearchContainer query={""}/>
      </div>
    );
  }
}

export default Home;
