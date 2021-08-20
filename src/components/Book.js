import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, removeBook }) {
  return (
    <div className="Lesson-Panel">
      <div className="left-title-area">
        <span className="School-of Text-Style-8">{book.category}</span>
        <div className="title Text-Style-6">{book.title}</div>
        <span className="Suzanne-Collins">Suzanne Collins</span>
        <div>
          <span className="Comments">Comments</span>
          <button className="Remove" type="button" onClick={() => removeBook(book)}>Remove</button>
          <span className="Edit">Edit</span>
        </div>
      </div>

      <div className="panel-right-side">
        <div className="oval-area-wrapper">
          <div className="Oval-2" />
          <div>
            <span className="-Percent-Complete">64%</span>
            <br />
            <span className="Completed">Completed</span>

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
  category: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
