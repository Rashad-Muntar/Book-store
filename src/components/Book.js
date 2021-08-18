import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, title, category }) {
  return (
    <tr>
      <td>{book}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
