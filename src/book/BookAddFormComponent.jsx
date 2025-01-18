import { useEffect, useState } from "react";
import { LIBRARY_SERVICE_BASE_URL } from "../const/api.const";
import "./BookAddFormComponent.css";
import { formatDate } from "../util/DateUtil";

const BookAddFormComponent = () => {
  const [allAuthors, setAllAuthors] = useState([]);
  const [name, setName] = useState("Book of Aurors");
  const [publishedDate, setPublishedDate] = useState(formatDate(new Date()));
  const [genre, setGenre] = useState("ACTION");
  const [author, setAuthor] = useState(["1"]);
  const [price, setPrice] = useState(1000);

  const handleBookAddFormSubmit = () => {
    fetch(LIBRARY_SERVICE_BASE_URL + "/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        bookName: name,
        publishedDate: publishedDate,
        bookGenre: genre,
        authorIds: author,
        bookPrice: price,
      }),
    }).then((addedBookResponse) => {
      window.location.href = "/";
    });
  };

  const renderAllAuthorsOptions = () => {
    return (
      <select
        id="authorName"
        name="authorName"
        value={author}
        onChange={(event) => {
          console.log(event.target.value);
          setAuthor([event.target.value]);
        }}
      >
        {allAuthors.map((author) => (
          <option value={author.id}>{author.name}</option>
        ))}
      </select>
    );
  };

  useEffect(() => {
    fetch(LIBRARY_SERVICE_BASE_URL + "/persons")
      .then((allPersonsResponse) => allPersonsResponse.json())
      .then((allPersonsData) =>
        setAllAuthors(
          allPersonsData.map((person) => ({
            id: person.personId,
            name: person.firstName + " " + person.lastName,
          }))
        )
      );
  }, []);

  return (
    <div>
      <table id="addBookFormTable">
        <tr>
          <td>Book Name:</td>
          <td>
            <input
              id="bookName"
              name="bookName"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>Published Date:</td>
          <td>
            <input
              type="date"
              id="publishedDate"
              name="publishedDate"
              value={publishedDate}
              onChange={(event) => setPublishedDate(event.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>Book Genre:</td>
          <td>
            <select
              id="bookGenre"
              name="bookGenre"
              value={genre}
              onChange={(event) => setGenre(event.target.value)}
            >
              <option>ACTION</option>
              <option>THRILLER</option>
              <option>ADVENTURE</option>
              <option>MYSTERY</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Authors:</td>
          <td>{renderAllAuthorsOptions()}</td>
        </tr>
        <tr>
          <td>Price:</td>
          <td>
            <input
              type="number"
              step={0.01}
              min={0}
              max={100000}
              id="price"
              name="price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <button type="reset">Reset</button>
          </td>
          <td>
            <button type="submit" onClick={() => handleBookAddFormSubmit()}>
              Submit
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default BookAddFormComponent;
