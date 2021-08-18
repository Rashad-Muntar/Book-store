export const createAction = (book) => ({
  type: 'CREATE_BOOK',
  book,
});

export const removeAction = (book) => ({
  type: 'REMOVE_BOOK',
  book,
});
