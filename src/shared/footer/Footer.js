import styles from './Footer.module.scss'

export default function Footer() {
  return <div className={styles.footer}>
    Developed by AV copyright&copy; {new Date().getFullYear()}
  </div>
}
