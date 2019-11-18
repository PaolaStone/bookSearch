import React from 'react';
import './index.css';

const BookList = (props) => {
    return(
        <div className="list">
            {
                props.books.map((book,i) => {
                    return<BookCard
                            key={i}        
                            image={book.volumeInfo.imageLinks.thumbnail}
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors}
                            description={book.volumeInfo.description}
                            link={book.volumeInfo.infoLink}
                            />
                })
            }

        </div>
    )
}
const BookCard = (props) => {
    return(
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h2>{props.title}</h2>
                    <h5>{props.author}</h5>
                </div> 
                <div class="card-body">
                    <div className="row">
                    <div className="col col-md-3">
                            <img src={props.image} alt=""/>
                        </div>
                        <div className="col col-md-9">
                            <p class="card-text">{props.description}</p>
                            {/* <p>{props.link}</p> */}
                            <a href={props.link} class="btn btn-warning">View</a>
                            <a href="#" class="btn btn-warning">Save</a>
                        </div>
                    </div>
                        
                    
                    
                </div>
                <br></br>
            </div>
          
        </div>
    )
}

export default BookList;