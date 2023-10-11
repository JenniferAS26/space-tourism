import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/shared/logo.svg'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import './styles.scss'

const Header = () => {
  const [menu, setMenu] = useState(false)

  const handleOpenMenu = () => {
    const navMenu = document.querySelector('.nav-menu')
    setMenu(true)
    navMenu.classList.add('open')
  }

  const handleCloseMenu = () => {
    const navMenu = document.querySelector('.nav-menu')
    setMenu(false)
    navMenu.classList.remove('open')
  }

  useEffect(() => {
    const navMenu = document.querySelector('.nav-menu')
    window.addEventListener('click', (event) => {
      if (menu && event.target.parentElement.id !== 'menu-open-button') {
        setMenu(false)
        navMenu.classList.remove('open')
      }
    })
  }, [])

  return (
    <section className='header'>
      <div className='logo-container'>
        <Link className='logo-link' to='/'>
          <img className='logo' src={logo} alt='logo icon' />
        </Link>
      </div>
      <div className='header__bar'></div>
      <div>
        <button
          id='menu-open-button'
          className='menu-open'
          onClick={handleOpenMenu}
        >
          <AiOutlineMenu />
        </button>
      </div>
      <nav className='nav-menu'>
        <ul>
          <li className='close'>
            <AiOutlineClose
              id='menu-close-button'
              className='menu-close'
              onClick={handleCloseMenu}
            />
          </li>
          <div className='menu-list'>
            <li>
              <Link className='link' to='/'>
                <span>00</span> Home
              </Link>
            </li>
            <li>
              <Link className='link' to='/destination'>
                <span>01</span> Destination
              </Link>
            </li>
            <li>
              <Link className='link' to='/crew'>
                <span>02</span> Crew
              </Link>
            </li>
            <li>
              <Link className='link' to='/technology'>
                <span>03</span> Technology
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </section>
  )
}

export default Header
