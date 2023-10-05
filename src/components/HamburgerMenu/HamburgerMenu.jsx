import PropTypes from "prop-types"
import './HamburgerMenu.css'

const HamburgerMenu = ({setCheckValue, checkValue}) => {
  HamburgerMenu.propTypes =  {
    setCheckValue: PropTypes.func,
    checkValue: PropTypes.bool
  }
  return (
    <>
      <label className='hamburger-menu'>
        <input 
        type="checkbox" 
        className='hamburger-menu__input'  
        onChange={() => (
        setCheckValue(!checkValue)
        )} 
        checked={checkValue}/>
        <span className="hamburger-menu__bar"></span>
        <span className="hamburger-menu__bar"></span>
      </label>
    </>
  )
}

export default HamburgerMenu
