import React from 'react';
import { useState } from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => {
  const options = categories.map((category) => (
    <option value={category} key={category}>
      {category}
    </option>
  ));
  



  return (
    <form>
      <input type="text" className="input" />
      <select>
        {options}
      </select>
      <button type="submit" className="btn">Add Book</button>
    </form>
  );
};

export default BooksForm;
