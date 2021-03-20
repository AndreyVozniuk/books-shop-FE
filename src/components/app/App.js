import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchBooks} from '../../store/actions/booksActions'
import {Header, Search, BookList, Filter, Footer, Loader, ErrorMessage} from '@components/index'
import './App.scss'
import 'alertifyjs/build/css/alertify.css'

function App() {
  const dispatch = useDispatch()
  const books = useSelector(state => state.booksStore.books)
  const booksLoading = useSelector(state => state.booksStore.loading)
  const booksRequestError = useSelector(state => state.booksStore.requestError)

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  return <div className='app'>
    <Header />

    <div className='content'>
      <Search />
      <div className='main'>
        <Filter />
        {
          booksLoading ? <Loader /> :
          booksRequestError ? <ErrorMessage /> :
          books.length !== 0 ? <BookList books={books}/> :
          <div className='main-message_no-books'>No books, sorry ☹</div>
        }
      </div>
    </div>

    <Footer />
  </div>
}

export default App
