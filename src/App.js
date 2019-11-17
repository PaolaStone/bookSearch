import React, {Component} from 'react';
import NavBar from './Components/NavBar/index.js';
import Header from './Components/Header/index.js';
import Search from './Components/Search/index.js';
import Results from './Components/Results/index.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        books: [],
        searchField: ''
    }
  }

  handleSearch = (e) => {
    console.log(e.target.value)
    this.setState({ searchField: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <Header/>
        <Search handleSearch={this.handleSearch}/>
        <br/>
        <Results/>
      </div>
    );
  }
}

export default App;



