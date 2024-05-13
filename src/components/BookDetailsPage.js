import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookDetailsPage.css'; // Import CSS file

function BookDetailsPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://softwium.com/api/books/${id}`)
      .then(response => response.json())
      .then(data => setBook(data))
      .catch(error => console.error('Error fetching book:', error));
  }, [id]);

  return (
    <div className="book-details-container">
      <h2>Book Details Page</h2>
      {book && (
        <div className="book-details">
          <div className="book-image">
            <img src={"https://cdn.pixabay.com/photo/2017/01/31/18/44/bible-2026336_1280.png"} alt={book.title} />
          </div>
          <p><strong>Title:</strong> {book.title}</p>
          <p><strong>ISBN:</strong> {book.isbn}</p>
          <p><strong>PageCount:</strong> {book.pageCount}</p>
          <p><strong>Authors:</strong> {book.authors.join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default BookDetailsPage;