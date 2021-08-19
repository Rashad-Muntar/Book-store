export const createAction = (book) => ({
  type: 'CREATE_BOOK',
  book,
});

export const removeAction = (book) => ({
  type: 'REMOVE_BOOK',
  book,
});

export const CHANGE_FILTER = (filter) => ({
  type: 'CHANGE_FILTER',
  filter,
});
