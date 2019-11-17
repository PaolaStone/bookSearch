import React, {Component} from 'react';
import NavBar from './Components/NavBar/index.js';
import Header from './Components/Header/index.js';
import Search from './Components/Search/index.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Header />
        <Search />
      </div>
    );
  }
}

export default App;



