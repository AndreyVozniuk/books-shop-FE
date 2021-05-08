import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadBooks } from '@store/reducers/booksReducer'
import { booksDataSelector } from '@store/selectors'
import { BookList, Filter, Search } from './components'
import Loader from '@shared/loader/Loader'
import ErrorMessage from '@shared/error-message/errorMessage'
import styles from './Home.module.scss'

function Home() {
  const dispatch = useDispatch()
  const [firstRender, setFirstRender] = useState(true)
  const booksSelector = useSelector(booksDataSelector)

  useEffect(() => {
    dispatch(loadBooks())
    setFirstRender(false)
  }, [])

  const isLoading = (booksSelector.isLoadBooksLoading || booksSelector.isSearchBooksLoading || booksSelector.isFilterBooksLoading)
  const isError = (booksSelector.loadBooksError || booksSelector.searchBooksError || booksSelector.filterBooksError)

  return <div>
    <div className={styles.content}>
      <Search />
      <div className={styles.main}>
        <Filter />
        {
          isLoading ? <Loader /> :
          isError ? <ErrorMessage /> :
          (booksSelector.books && booksSelector.books.length !== 0) ? <BookList books={booksSelector.books} /> :
          !firstRender ? <div className={styles.message_noBooks}>No books, sorry ☹</div> :
          ''
        }
      </div>
    </div>
  </div>
}

export default Home
