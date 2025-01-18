import { useEffect, useState } from "react";
import { LIBRARY_SERVICE_BASE_URL } from "../const/api.const";
import "./BookDetailsComponent.css";

const BookDetailsComponent = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch(LIBRARY_SERVICE_BASE_URL + "/books")
      .then((allBooksResponse) => allBooksResponse.json())
      .then((allBooksData) => setAllBooks(allBooksData));
  }, []);

  const renderBook = (book) => {
    return (
      <tr key={book.bookId} className="book-details-row">
        <td>{book.bookId}</td>
        <td>{book.bookName}</td>
        <td>{book.authors[0]?.name}</td>
        <td>{book.publishedDate}</td>
        <td>{book.bookGenre}</td>
        <td>{book.bookPrice}</td>
      </tr>
    );
  };

  return (
    <div>
      <table id="bookDetailsTable">
        <caption>Books</caption>
        <thead>
          <tr id="bookDetailsHeaderRow">
            <td>Book Id</td>
            <td>Book Name</td>
            <td>Author</td>
            <td>Published Date</td>
            <td>Genre</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>{allBooks.map((book) => renderBook(book))}</tbody>
      </table>
    </div>
  );
};

export default BookDetailsComponent;
