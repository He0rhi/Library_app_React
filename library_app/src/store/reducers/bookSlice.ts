import { createSlice, PayloadAction,createAsyncThunk  } from "@reduxjs/toolkit";

interface Book{
  id:number;
  title:string;
  author:string[];
  category:string[];
description:string;
}
interface BookState{
  searchName: string;
  category: string;
  sorting: string;
  books: Book[];
  totalItems: number;
  startIndex:number;
  selectedBook: Book|null;
  loading: boolean;
  error: string;
}

const initialState:BookState = {
    searchName: '',
    category: 'all',
    sorting: 'relevance',
    books: [],
    totalItems: 0,
    startIndex: 0,
    selectedBook: null,
    loading: false,
    error: ""
  };
const bookSlice = createSlice({
  name:'books',
  initialState,
  reducers:{
    fetchBook(state){
      const
    }
    bookRequest(state){
     state.loading=true;
    },
bookSuccess(state,action:PayloadAction<{books:Book[]; totalItems:number;}>){
  state.loading=false;
  state.books = action.payload.books;
  state.totalItems = action.payload.totalItems
},
bookError(state, action:PayloadAction<string> ){
state.loading=false;
state.error = action.payload;
},
selectBook(state,action:PayloadAction<Book>){
  state.selectedBook = action.payload;
},
deselectBook(state){
  state.selectedBook=null;
},
setSearchParams(state,action:PayloadAction<{searchName:string; category:string; sorting:string;}>){
  state.searchName = action.payload.searchName;
  state.category = action.payload.category;
  state.sorting = action.payload.sorting;
},
loadNext(state) {
  state.startIndex += 30;
},
loadPrev(state) {
  state.startIndex -= 30;
},
  }
  })
  export const {
    bookRequest,
    bookSuccess,
    bookError,
    selectBook,
    deselectBook,
    setSearchParams,
    loadNext,
    loadPrev,
  } = bookSlice.actions;
  
  export default bookSlice.reducer;