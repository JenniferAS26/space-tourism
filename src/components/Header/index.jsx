import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'
import logo from '../../assets/shared/logo.svg'
import './styles.scss'

const Header = () => {
  const [checkValue, setCheckValue] = useState(false)

  return (
    <header className='header'>
      <Link className='logo' to='/home'>
      <img src={logo} alt='logo'/>
      </Link>
      <div className='header__line'></div>
        <nav className={'navbar ' + ((checkValue) ? 'active' : '')}>
          <ul className='navlist'  onClick={() => setCheckValue(false)}>

            <li className='navlink'>
              <NavLink to='/' >
                <span className='nav-number'>00 &nbsp; </span>
                Home
              </NavLink>
            </li>

            <li className='navlink'>
              <NavLink to='/destination'>
                <span className='nav-number'>01 &nbsp; </span>
                Destination
              </NavLink>
            </li>

            <li className='navlink'>
              <NavLink to='/crew'>
                <span className='nav-number'>02 &nbsp; </span>
                Crew
              </NavLink>
            </li>

            <li className='navlink'>
              <NavLink to='/technology'>
                <span className='nav-number'>03 &nbsp; </span>
                Technology
              </NavLink>
            </li>
          </ul>
        </nav>
        <HamburgerMenu setCheckValue={setCheckValue} checkValue={checkValue}/>
    </header>
  )
}

export default Header
