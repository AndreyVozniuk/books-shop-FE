import logo from '@image/icon-logo.svg'
import iconMan from '@image/icon-man.svg'
import './Header.scss'

export default function Header() {
  return <div className='header'>
    <div className='header-logo' onClick={() => window.location.reload()}>
      <img src={logo} alt='logo'/>
    </div>

    <div className='header-login' onClick={() => null}>
      <img src={iconMan} alt='icon-man'/>
      <span>Log in</span>
    </div>
  </div>
}
