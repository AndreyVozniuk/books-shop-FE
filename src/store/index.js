import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './reducers/booksReducer'

export default configureStore({
  reducer: {
    booksData: booksReducer
  },
})
