import {SET_BOOKS, SET_BOOKS_LOADING, SET_BOOKS_REQUEST_ERROR} from './../types'

const initialState = {
  books: [],
  loading: false,
  requestError: null
}

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS: 
      return {...state, books: action.payload}
    case SET_BOOKS_LOADING:
      return {...state, loading: action.payload}
    case SET_BOOKS_REQUEST_ERROR:
      return {...state, requestError: action.payload}
    default:
      return state
  }
}