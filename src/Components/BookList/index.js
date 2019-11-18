import React from 'react';
// import BookCard from './Components/BookCard'

const BookList = (props) => {
    return(
        <div className="list">
            {
                props.books.map((book,i) => {
                    return<BookCard
                            key={i}        
                            image={book.volumeInfo.imageLinks.thumbnail}
                            tittle={book.volumeInfo.title}
                            author={book.volumeInfo.authors}
                            description={book.volumeInfo.description}
                            link={book.volumeInfo.selfLink}
                            />
                })
            }

        </div>
    )
}
const BookCard = (props) => {
    return(
        <div className="card-container">
            <img src={props.image} alt=""/>
            <div className="desc">
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
                <p>{props.description}</p>
                <p>{props.link}</p>
            </div>

        </div>
    )
}

export default BookList;