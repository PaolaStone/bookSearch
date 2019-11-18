import React from 'react';
import './index.css';

const BookList = (props) => {
    return(
        <div className="list">
            {
                props.books.map((book,i) => {
                    return<BookCard
                            key={i}        
                            title={book.volumeInfo.title}
                            image={book.volumeInfo.imageLinks.thumbnail}
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
                    <div className="row">
                        <div className="col col-md-7">
                            <h3>{props.title}</h3>
                            <h5>{props.author}</h5>
                        </div>
                        <div className="col col-md-5 text-right">
                            <a href={props.link} className="btn btn-warning">View</a>
                            <a href="#" className="btn btn-warning">Save</a>
                        </div>
                    </div>

                    
                </div> 
                <div className="card-body">
                    <div className="row">
                    <div className="col col-md-3">
                            <img className="img-fluid w-100" src={props.image} alt=""/>
                            
                        </div>
                        <div className="col col-md-9">
                            <p className="card-text">{props.description}</p>
                        </div>
                    </div>
                </div>
                <br></br>
            </div>
       </div>
    )
}

export default BookList;