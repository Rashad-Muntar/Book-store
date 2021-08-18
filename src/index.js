import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './reducers/index';
import reportWebVitals from './reportWebVitals';

const bookReducer = [
  {
    id: Math.random().toFixed(2),
    title: 'Principles',
    category: 'Learning',
  },

  {
    id: Math.random().toFixed(2),
    title: 'The 5am Club',
    category: 'Learning',
  },

  {
    id: Math.random().toFixed(2),
    title: 'The greatness guide',
    category: 'Biography',
  },
];

const intialState = { bookReducer };

const store = createStore(rootReducer, intialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
