export const createAction = (book) => ({
  type: 'CREATE_BOOK',
  book,
});

export const removeAction = (book) => ({
  type: 'REMOVE_BOOK',
  book,
});

export const filterAction = (filter) => ({
  type: 'CHANGE_FILTER',
  filter,
});
