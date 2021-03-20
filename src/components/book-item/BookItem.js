import PT from 'prop-types'
import Button from '../button/Button'
import './BookItem.scss'

function selectColor(category) {
  switch (category) {
    case 'Popular Science': return 'hotpink'
    case 'Dystopian Fiction': return 'antiquewhite'
    case ' Philosophical Fiction': return 'aquamarine' 
    case 'Classic Literature': return 'cadetblue'
    case 'Detective Fiction': return 'salmon' 
    case 'Science Fiction': return 'tomato'
    default: return 'gray'
  }
}

export default function BookItem({title, author, price, category}) {
  return <div className='book-item'>
    <div className='book-item__content'>
      <div className='book-item__title' style={{backgroundColor: selectColor(category)}}>
        <div>{title}</div>
      </div>
      <div className='book-item__subtitle'>
          <div className='book-item__info'><span>Author:</span> <span>{author}</span></div>
          <div className='book-item__info'><span>Price:</span> <span>{price}$</span></div>
          <div className='book-item__info'><span>Category:</span> <span>{category}</span></div>
      </div>
    </div>
    <div>
      <Button width='35%' padding='2px' fontSize='14px'>Buy!</Button>  
    </div>
  </div>
}

BookItem.propTypes = {
  title: PT.string.isRequired,
  author: PT.string.isRequired,
  price: PT.string.isRequired,
  category: PT.string.isRequired
}