import React from 'react';
import { Container } from 'react-bootstrap';
import BookDetail from './BookDetail';
import BookList from './BookList';
import SearchForm from './SearchForm';
import SpinnerLoader from './SpinnerLoader';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';


interface HomeProps {
  user: any;
}

const Home: React.FC<HomeProps> = ({ user }) => {
  const dispatch = useDispatch();
  const { searchName, category, sorting, books, totalItems, startIndex, selectedBook, loading } = useSelector(
    (state: RootState) => state.books
  );

  const handleSearch = async () => {
    dispatch(requestBooks());
    try {
      const { books, totalItems } = await fetchBook(searchName, category, sorting, startIndex);
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
        ) : user ? (
          selectedBook ? (
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
          )
        ) : (
          <p>Please sign in to see the book list.</p>
        )}
      </Container>
    </div>
  );
};

const requestBooks = () => ({ type: 'BOOK_REQUEST' });
const successBooks = (books: any, totalItems: any) => ({ type: 'BOOK_SUCCESS', payload: { books, totalItems } });
const errorBooks = (error: any) => ({ type: 'BOOK_ERROR', payload: error });

export default Home;
