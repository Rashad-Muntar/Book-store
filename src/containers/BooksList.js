import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterAction, removeAction } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import '../styles/BookList.css';

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
      <header className="m-b bg-white round-top">
        <div className="center max-width-90 flex-row">
          <h1 className="app-title">
            Bookstore CMS
          </h1>
          <div className="cat-title">
            <span className="text-grey">Books</span>
          </div>
          <div className="categories text-center">
            <CategoryFilter CategoryFilter={handleFilterChanger} />
          </div>
          <img cclassName="react-logo" src="https://img.icons8.com/ios-glyphs/30/4a90e2/user--v1.png" alt="user" />
        </div>
      </header>
      <main className="bg-grey">
        <div className="center max-width-90 bookSection">
          {
           filteredBooks.map((book) => (
             <Book
               key={book.id}
               book={book}
               handleRemoveBook={handleRemoveBook}
             />
           ))
          }
        </div>
      </main>
    </div>
  );
}

export default BooksList;
