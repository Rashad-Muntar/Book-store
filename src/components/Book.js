import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Book.css';

function Book({ book, removeBook }) {
  return (

    <div className="Lesson-Panel">
      <div className="left-title-area">
        <span className="category">{book.category}</span>
        <div className="title">{book.title}</div>
        <span className="sussan ">Suzanne Collins</span>

        <div className="delete-area">
          <span className="Comments">Comments</span>
          <button className="remove" type="button" onClick={() => removeBook(book)}>Remove</button>
          <span className="Edit">Edit</span>
        </div>
      </div>

      <div className="panel-right-side">

        <div className="oval-area-wrapper">
          <div className="chart" aria-label="chart" />

          <div className="percentage-area">
            <span className="percentage">64%</span>
            <span className="">Completed</span>
          </div>
        </div>

        <div className="update-area">
          <span className="Current-Chapter">Current Chapter</span>
          <span className="Current-Lesson">Chapter 17</span>
          <span className="Update-progress">Update progress</span>
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
