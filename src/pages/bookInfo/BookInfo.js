import styles from './BookInfo.module.scss'

function BookInfo({ bookID }) {
  return <div className={styles.wrapper}>
    <div className={styles.content}>
      Book info page! :D ID - {bookID}
    </div>
  </div>
}

export default BookInfo
