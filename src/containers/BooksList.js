import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';

function BooksList() {
  const books = useSelector((state) => state.bookReducer);

  return (
    <div>
      <h2>Book List</h2>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {
             books.map((book) => (
               <Book
                 key={book.id}
                 title={book.title}
                 category={book.category}
                 book={book.id}
               />
             ))
         }

        </tbody>
      </table>
    </div>
  );
}

export default BooksList;
