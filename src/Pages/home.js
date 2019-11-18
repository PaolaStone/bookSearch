import React, {Component} from 'react';
import BookList from '../Components/BookList';
import NavBar from '../Components/NavBar';
import Header from '../Components/Header';
import Search from '../Components/Search';
import request from 'superagent';
// import './App.css';

class Home extends Component {
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
            
            this.setState({ books: [...data.body.items]})
            console.log(...data.body.items)
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
            
            <BookList books={this.state.books}/>

        </div>
        );
    }
}

export default Home;