import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Spinner } from 'react-bootstrap';
import Header from './Header';
import BookDetail from './BookDetail';
import BookList from './BookList';
import SearchForm from './SearchForm';
import SpinnerLoader from './SpinnerLoader';
import { RootState } from '../store/reducers/rootReducer';
import { fetchBook, selectBook, deselectBook, setSearchParams, loadNext, loadPrev,BOOK_REQUEST,BOOK_SUCCESS,BOOK_ERROR } from '../actions/bookActions';
import { useDebounce } from 'use-debounce';


const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { searchName, category, sorting, books, totalItems, startIndex, selectedBook, loading } = useSelector(
    (state: RootState) => state.books
  );
  const [debouncedSearchName] = useDebounce(searchName, 2000);

  useEffect(() => {
    const loadBooks = async () => {
      dispatch(requestBooks()); 
      try {
        const { books, totalItems } = await fetchBook(debouncedSearchName, category, sorting, startIndex);
        dispatch(successBooks(books, totalItems)); 
      } catch (error) {
        dispatch(errorBooks(error)); 
      }
    };

    loadBooks();
  }, [dispatch, debouncedSearchName, category, sorting, startIndex]);

  const handleSearch = async () => {
    dispatch(requestBooks());
    try {
      const { books, totalItems } = await fetchBook(debouncedSearchName, category, sorting, startIndex);
      dispatch(successBooks(books, totalItems));
    } catch (error) {
      dispatch(errorBooks(error)); 
    }
  };

  const handleBookSelect = (book: any) => {
    dispatch(selectBook(book));
  };

  const handleBookToList = () => {
    dispatch(deselectBook());
  };

  return (
    <div>
      <Container className="HomeMainContainer">
        <SearchForm
          searchName={searchName}
          setSearchName={(name) => dispatch(setSearchParams(name, category, sorting))}
          category={category}
          setCategory={(cat) => dispatch(setSearchParams(searchName, cat, sorting))}
          sorting={sorting}
          setSorting={(sort) => dispatch(setSearchParams(searchName, category, sort))}
          handleSearch={handleSearch}
        />
        {loading ? (
          <SpinnerLoader />
        ) : selectedBook ? (
          <BookDetail book={selectedBook} onBack={handleBookToList} />
        ) : (
          <BookList
            books={books}
            totalItems={totalItems}
            startIndex={startIndex}
            loadNext={() => dispatch(loadNext())}
            loadPrev={() => dispatch(loadPrev())}
            onBookSelect={handleBookSelect}
          />
        )}
      </Container>
    </div>
  );
};


const requestBooks = () => ({ type: 'BOOK_REQUEST' });
const successBooks = (books: any, totalItems: any) => ({ type: 'BOOK_SUCCESS', payload: { books, totalItems } });
const errorBooks = (error: any) => ({ type: 'BOOK_ERROR', payload: error });

export default Home;
