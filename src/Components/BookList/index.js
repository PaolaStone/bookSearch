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
                    <div className="row">
                    <div className="col col-md-7">
                        <h3>{props.title}</h3>
                        <h5>{props.author}</h5>
                    </div>
                   <div className="col col-md-5 text-right">
                        <a href={props.link} class="btn btn-warning">View</a>
                        <a href="#" class="btn btn-warning">Save</a>
                    </div>
                    </div>

                    
                </div> 
                <div class="card-body">
                    <div className="row">
                    <div className="col col-md-3">
                            <img className="img-fluid w-100" src={props.image} alt=""/>
                            
                        </div>
                        <div className="col col-md-9">
                            <p class="card-text">{props.description}</p>
                            {/* <p>{props.link}</p> */}
                            
                        </div>
                    </div>
                        
                    
                    
                </div>
                <br></br>
            </div>
          
        </div>
    )
}

export default BookList;