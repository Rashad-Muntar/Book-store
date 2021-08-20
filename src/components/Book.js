import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Book.css';

function Book({ book, removeBook }) {
  return (

    <div className="Lesson-Panel">
      <div className="left-title-area">
        <div className="title Text-Style-6">{book.title}</div>
        <div className="title Text-Style-6">{book.title}</div>
        <span className="Suzanne-Collins">Suzanne Collins</span>

        <div className="delete-area">
          <span className="Comments">Comments</span>
          <button className="Remove" type="button" onClick={() => removeBook(book)}>Remove</button>
          <span className="Edit">Edit</span>
        </div>
      </div>

      <div className="panel-right-side">

        <div className="oval-area-wrapper">
          <div className="Oval-2" />

          <div className="percentage-area">
            <span className="-Percent-Complete">64%</span>
            <span className="">Completed</span>
          </div>
        </div>

        <div className="update-area">
          <span className="">Current Chapter</span>
          <span className="">Chapter 17</span>
          <span className="">Update progress</span>
        </div>

      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
