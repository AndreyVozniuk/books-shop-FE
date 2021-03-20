import PT from 'prop-types'
import BookItem from '../book-item/BookItem'
import './BookList.scss'

export default function BookList({books}) {
  return <div className='book-list'>
    {books.map(({_id, title, price, author, category}) => {
      return <BookItem key={_id} title={title} author={author} price={price} category={category}/>
    })}
  </div>
}

BookList.propTypes = {
  books: PT.array.isRequired
}