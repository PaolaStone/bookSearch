import React from 'react';
import './index.css';

const Search = (props) => {
    return(
         <div className="container search-area">
          
            <form onSubmit={props.searchBook} className="form">
                <input onChange={props.handleSearch}className="form-control mr-sm-2" type="search" placeholder="Book Name" aria-label="Search"/>
                <br></br>
                <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>   
    )
}

export default Search;