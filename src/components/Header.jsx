import { Link } from 'react-router-dom'
import '../styles/global/GlobalStyle.scss'
import '../styles/header/Header.scss'
import logo from '../assets/LOGO.png'


function Header() {
  return (
    <div className='navContainer'>
      <img src={logo} alt="logo" className='logo'/>
      <Link to="/">Accueil</Link>
      <Link to="/about">A propos</Link>
    </div>
  )
}

export default Header