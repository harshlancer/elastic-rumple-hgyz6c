# Book Finder App

## Overview
The Book Finder App is a React-based web application that allows users to search for books using the Open Library API. Users can search by title, author, or ISBN and view results in a responsive grid with book covers and details displayed on hover.

## Features
- **Search Functionality**: Search books by title, author, or ISBN.
- **Responsive Design**: Displays books in a grid layout that adapts to different screen sizes.
- **Interactive UI**: Hover effects on book cards reveal additional details like title, author, and publication year.
- **Dark Theme**: Modern dark-themed UI with Tailwind CSS styling for a clean and visually appealing experience.

## Tech Stack
- **React**: For building the user interface and managing state.
- **Tailwind CSS**: For styling the application with a utility-first approach.
- **Open Library API**: For fetching book data based on user queries.
- **JavaScript (ES6+)**: For modern JavaScript syntax and async API calls.

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/harshlancer/elastic-rumple-hgyz6c.git
   cd book-finder-app
   ```

2. **Install Dependencies**:
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Run the Application**:
   Start the development server:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

## Usage
1. Open the app in your browser.
2. Use the search bar to enter a query (e.g., book title, author name, or ISBN).
3. Select the search type (Title, Author, or ISBN) from the dropdown.
4. Click the "Search" button to fetch results.
5. Hover over a book card to view details like the title, author, and first publication year.

## Project Structure
```
book-finder-app/
├── src/
│   ├── App.js          # Main app component with search and book grid
│   ├── Book.js         # Component for rendering individual book cards
│   ├── api.js          # API utility for fetching book data
│   ├── styles.css      # Tailwind CSS styles for the app
├── public/
│   ├── index.html      # HTML entry point
├── README.md           # This file
├── package.json        # Project dependencies and scripts
```

## Dependencies
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `tailwindcss`: ^3.4.1

## API
The app uses the [Open Library Search API](https://openlibrary.org/dev/docs/api/search) to fetch book data. The API is queried based on the search type:
- **Title**: `https://openlibrary.org/search.json?title={query}`
- **Author**: `https://openlibrary.org/search.json?author={query}`
- **ISBN**: `https://openlibrary.org/search.json?isbn={query}`

## Styling
- The app uses Tailwind CSS for styling, with a dark theme and responsive grid layout.
- Book cards feature hover effects with a semi-transparent overlay for displaying book details.
- The design is optimized for both desktop and mobile devices.

## Future Improvements
- Add loading and error states for better user feedback.
- Implement pagination for large search results.
- Add filters for sorting results (e.g., by publication year).
- Support for additional book details (e.g., publisher, genre).

## License
This project is licensed under the MIT License.
```

