import { combineReducers } from "redux";
import {
    BOOK_REQUEST,
    BOOK_SUCCESS,
    BOOK_ERROR,
    SELECT_BOOK,
    DESELECT_BOOK,
    SET_SEARCH_PARAMS,
    LOAD_NEXT,
    LOAD_PREV
  } from '../actions/bookActions';

  const initialState = {
    searchName: '',
    category: 'all',
    sorting: 'relevance',
    books: [],
    totalItems: 0,
    startIndex: 0,
    selectedBook: null,
    loading: false,
    error: null
  };


  const bookReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case BOOK_REQUEST:
        return { ...state, loading: true };
      case BOOK_SUCCESS:
        return { ...state, loading: false, books: action.payload.books, totalItems: action.payload.totalItems };
      case BOOK_ERROR:
        return { ...state, loading: false, error: action.payload };
      case SELECT_BOOK:
        return { ...state, selectedBook: action.payload };
      case DESELECT_BOOK:
        return { ...state, selectedBook: null };
      case SET_SEARCH_PARAMS:
        return { ...state, searchName: action.payload.searchName, category: action.payload.category, sorting: action.payload.sorting };
      case LOAD_NEXT:
        return { ...state, startIndex: state.startIndex + 30 };
      case LOAD_PREV:
        return { ...state, startIndex: state.startIndex - 30 };
      default:
        return state;
    }
  };
  
  export default bookReducer;

  