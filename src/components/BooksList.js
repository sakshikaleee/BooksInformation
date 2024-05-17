import React from 'react';
import './BookList.css'; 

function BooksList() {
  const book = {
    title: "BOOKINFO",
    imageSrc: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace this with the correct image URL
  };

  const handleButtonClick = () => {
    window.location.href = "/Books";
  };

  return (
    <div className="books-list">
      <div className="book-info">
        <h2>{book.title}</h2>
        <p>Books are crucial in every student’s life because they introduce children to a world of imagination, provide information of the outside world, improve their reading, writing, and speaking abilities, and improve memory and intellect. Students benefit much from books, and they learn a great deal from them. They immerse children in a distinct realm of fantasy while also raising their living standards. Reading books has several advantages; children will get more information, increase their memory, and expand their vocabulary.</p>
        <button onClick={handleButtonClick}>BookList</button>
      </div>
      <div className="book-image">
        <img src={book.imageSrc} alt={book.title} />
      </div>
    </div>
  );
}

export default BooksList;
