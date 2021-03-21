import repairIcon from '@images/repair-expert.svg'
import styles from './errorMessage.module.scss'

export default function ErrorMessage() {
  return <div className={styles.error}>
    <div className={styles.errorMessage}>Oops, something went wrong, but our team fix it now, don`t care</div>
    <div className={styles.errorIcon}>
      <img src={repairIcon} alt='repair-icon' />
    </div>
  </div>
}
