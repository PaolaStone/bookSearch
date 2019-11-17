import React from 'react';
import './index.css';

const NavBar = () => {
    return(
     <div>
        <nav className="navbar navbar-light bg-light">
        <i className="fas fa-book-open fa-2x"></i>
            <a className="nav-link" >Search </a>
            <a className="nav-link" >Saved</a>
        </nav>
     </div>    
    )
}

export default NavBar;