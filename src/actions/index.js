const newBookAction = (book) => {
  'CREATE_BOOK';

  book;
};

const deleteBookAction = (book) => {
  'REMOVE_BOOK';

  book;
};

export { newBookAction, deleteBookAction };
