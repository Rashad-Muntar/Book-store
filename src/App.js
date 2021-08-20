import BooksList from './containers/BooksList';
import BooksForm from './containers/BooksForm';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
