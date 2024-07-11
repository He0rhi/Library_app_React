import axios from "axios";

export const BOOK_REQUEST = "BOOK_REQUEST";
export const BOOK_SUCCESS = "BOOK_SUCCESS";
export const BOOK_ERROR = "BOOK_ERROR";
export const SELECT_BOOK = "SELECT_BOOK";
export const DESELECT_BOOK = "DESELECT_BOOK";
export const SET_SEARCH_PARAMS = "SET_SEARCH_PARAMS";
export const LOAD_NEXT = "LOAD_NEXT";
export const LOAD_PREV = "LOAD_PREV";
const keyapi = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

export const fetchBook = async (searchName: string, category: string, sorting: string, startIndex: number) => {
  let subject ="";
 
  if(category&&category!=="all"){
subject=`+subject:${category}`;
  }
  if(searchName==""){
    searchName="js"
  }
  const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchName)}${subject}&startIndex=${startIndex}&maxResults=30&orderBy=${sorting}&key=${keyapi}`;

  try {
    const response = await axios.get(url);
    return { books: response.data.items ?? [], totalItems: response.data.totalItems ?? 0 };
  } catch (error) {
   console.log(error);
  }
};

export const selectBook = (book: any) => ({ type: SELECT_BOOK, payload: book });
export const deselectBook = () => ({ type: DESELECT_BOOK });
export const setSearchParams = (searchName: string, category: string, sorting: string) => ({
  type: SET_SEARCH_PARAMS,
  payload: { searchName, category, sorting }
});
export const loadNext = () => ({ type: LOAD_NEXT });
export const loadPrev = () => ({ type: LOAD_PREV });
