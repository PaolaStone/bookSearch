import React from 'react';
// import BookCard from './Components/BookCard/index.js'

const BookList = (props) => {
    return(
        <div className="list">
            {
                props.books.map((book,i) => {
                    return<div
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

export default BookList;