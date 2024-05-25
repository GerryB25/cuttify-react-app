import '../assets/css/navbar.css'
import MainIcon from '../assets/main-icon.svg'

export function Navbar () {
  return (
        <aside className="navbar">
            <div className='navbar-body'>
                <a className='main-icon' href="/"><img src={MainIcon} alt="cuttify-url-icon" /></a>
                <ul>
                    <li><a className='nav-anchor' href="">Inicio</a></li>
                    <li><a className='nav-anchor' href="">Log In</a></li>
                    <li><a className='sign-up-button' href="">Sign Up</a></li>
                </ul>
            </div>
        </aside>
  )
}
