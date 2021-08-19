const filterReducer = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return state.filter((book) => book.category === action.book.category);
    default:
      return state;
  }
};

export default filterReducer;
