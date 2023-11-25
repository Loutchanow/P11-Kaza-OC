import { Link } from 'react-router-dom'
import '../styles/global/GlobalStyle.scss'
import '../styles/header/Header.scss'
import logo from '../assets/LOGO.png'


function Header() {
  return (
    <div className='navContainer'>
      <img src={logo} alt="logo" className='logo'/>
      <div className='navContainer__links'>
       <Link to="/" className='link'>Accueil</Link>
        <Link to="/about" className='link'>A propos</Link> 

      </div>
    </div>
  )
}

export default Header