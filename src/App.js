import React, {Component} from 'react';
import NavBar from './Components/NavBar/index.js';
import Header from './Components/Header/index.js';
import Search from './Components/Search/index.js';
import Results from './Components/Results/index.js';
import request from 'superagent';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        books: [],
        searchField: ''
    }
  }

  searchBook = (e) => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes?")
      .query({ q: this.state.searchField})
      .then((data) => {
        console.log(data)
      })
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
        <Search searchBook={this.searchBook} handleSearch={this.handleSearch}/>
        <br/>
        <Results/>
      </div>
    );
  }
}

export default App;



