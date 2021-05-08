import PT from 'prop-types'
import BookItem from '@shared/book-item/BookItem'
import styles from './BookList.module.scss'

export default function BookList({ books }) {
  return <div className={styles.bookList}>
    {
      books.map(({_id, title, price, author, category, imageLink}) => (
        <BookItem key={_id} title={title} author={author} price={price} category={category} imageLink={imageLink}/>
      ))
    }
  </div>
}

BookList.propTypes = {
  books: PT.array.isRequired
}
