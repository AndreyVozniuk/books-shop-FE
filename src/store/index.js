import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {booksReducer} from './reducers/booksReducer'

const rootReducer = combineReducers({
  booksStore: booksReducer
})

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
))