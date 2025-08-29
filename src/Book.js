import React from "react";

export default function Book({ book }) {
  return (
    <div className="book-card">
      {book.cover_i ? (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          alt={book.title}
          className="book-cover"
        />
      ) : (
        <div className="no-cover">No Cover</div>
      )}


      <div className="book-overlay">
        <h4>{book.title}</h4>
        {book.author_name && <p>by {book.author_name.join(", ")}</p>}
        {book.first_publish_year && <p>{book.first_publish_year}</p>}
      </div>
    </div>
  );
}
