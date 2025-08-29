import "./styles.css";
import { fetchBooks } from "./api.js";
import { useState, useEffect } from "react";
import Book from "./Book.js";

export default function App() {
  const [data, setData] = useState(null);
  const [querry, setQuerry] = useState(null);
  const [input, setInput] = useState("");
  const [searchType, setSearchType] = useState("title"); // for title/author/isbn

  useEffect(() => {
    const getBooks = async () => {
      if (!querry) return;
      const books = await fetchBooks(querry, searchType);
      setData(books.docs);
    };
    getBooks();
  }, [querry, searchType]);

  const handleSearch = () => {
    setQuerry(input);
  };

  return (
    <div className="App">
      <div className="header">
        <h3>📚 Book Finder</h3>
        <input
          type="text"
          placeholder="Search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="title">By Title</option>
          <option value="author">By Author</option>
          <option value="isbn">By ISBN</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>

      {data ? (
        <div className="book-grid">
          {data.map((book, index) => (
            <Book key={index} book={book} />
          ))}
        </div>
      ) : (
        "Enter search"
      )}
    </div>
  );
}
