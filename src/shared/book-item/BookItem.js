import PT from 'prop-types'
import Button from '@shared/button/Button'
import styles from './BookItem.module.scss'

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

export default function BookItem({ title, author, price, category }) {
  return <div className={styles.wrapper}>
    <div className={styles.content}>
      <div className={styles.title} style={{backgroundColor: selectColor(category)}}>
        <div>{title}</div>
      </div>
      <div className={styles.subtitle}>
          <div className={styles.info}><span>Author:</span> <span>{author}</span></div>
          <div className={styles.info}><span>Price:</span> <span>{price}$</span></div>
          <div className={styles.info}><span>Category:</span> <span>{category}</span></div>
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
