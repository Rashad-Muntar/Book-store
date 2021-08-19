import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterAction, removeAction } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import '../App.css';

function BooksList() {
  const books = useSelector((state) => state.bookReducer);
  const filter = useSelector((state) => state.filterReducer);
  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    dispatch(removeAction(book));
  };

  const handleFilterChanger = (e) => {
    dispatch(filterAction(e.target.value));
  };

  const filteredBooks = (filter !== 'All') ? books.filter((book) => book.category === filter) : books;

  return (
    <div>
      <div className="panel-bg">
        <span className="Bookstore-CMS Text-Style-5">Bookstore CMS</span>
        <span className="BOOKS">BOOKS</span>
        <CategoryFilter CategoryFilter={handleFilterChanger} />
        <span className="Oval">
          <img className="Mask" src="https://img.icons8.com/ios-glyphs/30/4a90e2/user--v1.png" alt="user" />
        </span>
      </div>
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
           filteredBooks.map((book) => (
             <Book
               key={book.id}
               book={book}
               handleRemoveBook={handleRemoveBook}
             />
           ))
          }

        </tbody>
      </table>
    </div>
  );
}

export default BooksList;
