import React from 'react';
import { Container } from 'react-bootstrap';
import BookDetail from './BookDetail';
import BookList from './BookList';
import SearchForm from './SearchForm';
import SpinnerLoader from './SpinnerLoader';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store'; 
import { fetchBooks, selectBook, deselectBook, setSearchParams, loadNext, loadPrev } from '../store/reducers/bookSlice';


const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { searchName, category, sorting, books, totalItems, startIndex, selectedBook, loading } = useSelector(
    (state: RootState) => state.books
  );

  const handleSearch = async () => {
    try {
      await dispatch(fetchBooks({ searchName, category, sorting, startIndex }));
    } catch (error) {
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
          setSearchName={(name) => dispatch(setSearchParams({ searchName: name, category, sorting }))}
          category={category}
          setCategory={(cat) => dispatch(setSearchParams({ searchName, category: cat, sorting }))}
          sorting={sorting}
          setSorting={(sort) => dispatch(setSearchParams({ searchName, category, sorting: sort }))}
          handleSearch={handleSearch}
        />
        {loading ? (
          <SpinnerLoader />
        ) : 
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
       
        }
      </Container>
    </div>
  );
};

export default Home;
