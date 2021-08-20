import BooksList from './containers/BooksList';
import BooksForm from './containers/BooksForm';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="backBG bg-dark-grey">
        <div className="container center">
          <BooksList />
          <BooksForm />
        </div>
      </div>
    </div>
  );
}

export default App;
