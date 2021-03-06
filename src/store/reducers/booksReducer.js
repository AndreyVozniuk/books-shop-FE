import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { asyncActionsCreator } from '../reducerHelper'
import * as api from '@api'

export const loadBooks = createAsyncThunk('books/loadBooks', async () => await api.loadBooks())
export const searchBooks = createAsyncThunk(
  'books/searchBooks',
  async (searchData) => await api.searchBooks(searchData.value, searchData.searchOption)
)
export const filterBooks = createAsyncThunk(
  'books/filterBooks',
  async (filterData) => await api.filterBooks(filterData.categories, filterData.price)
)

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: null,
  },
  extraReducers: {
    ...asyncActionsCreator(
      loadBooks,
      'loadBooks',
      {
        fulfilled: (state, { payload }) => {
          state.isLoadBooksLoading = false
          state.books = payload.books
        },
      },
      { loadingHandler: true },
    ),

    ...asyncActionsCreator(
      searchBooks,
      'searchBooks',
      {
        fulfilled: (state, { payload }) => {
          state.isSearchBooksLoading = false
          state.books = payload.foundBooks
        },
      },
      { loadingHandler: true },
    ),

    ...asyncActionsCreator(
      filterBooks,
      'filterBooks',
      {
        fulfilled: (state, { payload }) => {
          state.isFilterBooksLoading = false
          state.books = payload.filteredBooks
        },
      },
      { loadingHandler: true },
    )
  },
})

export default booksSlice.reducer
