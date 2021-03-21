import logo from '@images/icon-logo.svg'
import iconMan from '@images/icon-man.svg'
import styles from './Header.module.scss'

export default function Header() {
  return <div className={styles.header}>
    <div className={styles.headerLogo} onClick={() => window.location.reload()}>
      <img src={logo} alt='logo'/>
    </div>

    <div className={styles.headerLogin} onClick={() => null}>
      <img src={iconMan} alt='icon-man'/>
      <span>Log in</span>
    </div>
  </div>
}
