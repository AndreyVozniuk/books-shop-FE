import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '@store/actions/booksActions'
import { BookList, Filter, Search } from './components'
import Loader from '@shared/loader/Loader'
import ErrorMessage from '@shared/error-message/errorMessage'
import styles from './Home.module.scss'

function Home() {
  const dispatch = useDispatch()
  const [firstRender, setFirstRender] = useState(true)
  const books = useSelector(state => state.booksStore.books)
  const booksLoading = useSelector(state => state.booksStore.loading)
  const booksRequestError = useSelector(state => state.booksStore.requestError)

  useEffect(() => {
    dispatch(fetchBooks())
    setFirstRender(false)
  }, [])

  return <div>
    <div className={styles.content}>
      <Search />
      <div className={styles.main}>
        <Filter />
        {
          booksLoading ? <Loader /> :
          booksRequestError ? <ErrorMessage /> :
          books.length !== 0 ? <BookList books={books}/> :
          !firstRender ? <div className={styles.message_noBooks}>No books, sorry ☹</div> :
          ''
        }
      </div>
    </div>
  </div>
}

export default Home
