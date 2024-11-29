import React from "react";
import "../styles/BookList.css";

const BookList = ({ books, onBookSelect }) => {
    return (
        <div className="book-list">
            {books.map((book) => (
                <div
                    key={book.id}
                    className="book-item"
                    onClick={() => onBookSelect(book)} // 책을 선택했을 때 호출되는 함수
                >
                    <img src={book.poster} alt={book.title} />
                    <h3>{book.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default BookList;
