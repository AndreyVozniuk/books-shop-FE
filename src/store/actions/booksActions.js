import axios from 'axios'
import { config } from '@appConfig'
import { SET_BOOKS, SET_BOOKS_LOADING, SET_BOOKS_REQUEST_ERROR } from './../types'

function asyncQuery(url) {
  return dispatch => {
    dispatch(setLoading(true))

    axios.get(config.API + url)
    .then(res => dispatch( setBooks(res.data) ))
    .catch(err => {
      console.error(err)
      dispatch( setRequestError(err) )
    })
    .finally(_ => dispatch( setLoading(false) ))
  }
}

export function fetchBooks() {
  return asyncQuery('/books')
}

export function searchBooks(searchTxt, option) {
  return asyncQuery(`/searchBooks?value=${searchTxt}&option=${option}`)
}

/* sync actions */
export function setBooks(books) {
  return {
    type: SET_BOOKS,
    payload: books
  }
}

export function setLoading(loadingStatus) {
  return {
    type: SET_BOOKS_LOADING,
    payload: loadingStatus
  }
}

export function setRequestError(error) {
  return {
    type: SET_BOOKS_REQUEST_ERROR,
    payload: error
  }
}
