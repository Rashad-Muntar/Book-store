import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterAction, removeAction } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

function BooksList() {
  const books = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    dispatch(removeAction(book));
  };

  const handleFilterChanger = (e) => {
    dispatch(filterAction(e.target.value));
    console.log(e.target.value);
  };

  return (
    <div>
      <h2>Book List</h2>
      <span>Filter: </span>
      <CategoryFilter CategoryFilter={handleFilterChanger} />
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
                 book={book}
                 removeBook={handleRemoveBook}
               />
             ))
         }

        </tbody>
      </table>
    </div>
  );
}

export default BooksList;
