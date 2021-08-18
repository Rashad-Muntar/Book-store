import React from 'react';
import { useState } from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => {
  const options = categories.map((category) => (
    <option value={category} key={category}>
      {category}
    </option>
  ));
  
  const [book, setBook] = useState({title: '', category: ''});
  let bookTitle = '';
  let bookCategory = '';

  const handleChange = (e) => {
    if(e.target.name === 'title'){
      setBook({ title: e.target.value });
    } else {
      setBook({ category: e.target.value });
    }
  };

  return (
    <form>
      <input name="title" onChange={handleChange} type="text" className="input" />
      <select name="category" onChange={handleChange}>
        {options}
      </select>
      <button onClick={handleChange} type="submit" className="btn">Add Book</button>
    </form>
  );
};

export default BooksForm;
