export async function fetchBooks(query, type = "title") {
    let url = "";
    if (type === "title") {
      url = `https://openlibrary.org/search.json?title=${query}`;
    } else if (type === "author") {
      url = `https://openlibrary.org/search.json?author=${query}`;
    } else if (type === "isbn") {
      url = `https://openlibrary.org/search.json?isbn=${query}`;
    }
  
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
  