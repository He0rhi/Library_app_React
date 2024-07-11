

import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBook } from "../../api/bookAPI";

interface Book {
  id: number;
  title: string;
  authors: string[];
  categories: string[];
  description: string;
}

interface BookState {
  searchName: string;
  category: string;
  sorting: string;
  books: Book[];
  totalItems: number;
  startIndex: number;
  selectedBook: Book | null;
  loading: boolean;
  error: string | null;
}

const initialState: BookState = {
  searchName: '',
  category: 'all',
  sorting: 'relevance',
  books: [],
  totalItems: 0,
  startIndex: 0,
  selectedBook: null,
  loading: false,
  error: null,
};

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (
    { searchName, category, sorting, startIndex }: 
    { searchName: string; category: string; sorting: string; startIndex: number }, 
    thunkAPI
  ) => {
    try {
      const response = await fetchBook(searchName, category, sorting, startIndex);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch books");
    }
  }
);

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    selectBook(state, action: PayloadAction<Book>) {
      state.selectedBook = action.payload;
    },
    deselectBook(state) {
      state.selectedBook = null;
    },
    setSearchParams(state, action: PayloadAction<{ searchName: string; category: string; sorting: string; }>) {
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<{ books: Book[]; totalItems: number }>) => {
        state.loading = false;
        state.books = action.payload.books;
        state.totalItems = action.payload.totalItems;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {
  selectBook,
  deselectBook,
  setSearchParams,
  loadNext,
  loadPrev,
} = bookSlice.actions;

export default bookSlice.reducer;
