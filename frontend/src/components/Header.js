import React from 'react'
import '../style/header.css'
const Header = () => {
  let width = window.innerWidth

  return (
    <div>
      <div className='navHeader'>
        <div>
          <a className='navLogo' href='#home'>
            Medicom
          </a>
        </div>
        {width >= 768 ? (
          <div>
            <ul className='navList'>
              <li>
                <a href='#Category'>Home</a>
              </li>
              <li>
                <a href='#Category'>Category</a>
              </li>
              <li>
                <a href='#home'>Contact</a>
              </li>
              <li>
                <a href='#home'>About</a>
              </li>
            </ul>
          </div>
        ) : null}

        <div className='navButtons'>
          <button className='loginBtn'>Login</button>
          <button className='cartIcon'>
            <i className='fa fa-shopping-cart' aria-hidden='true'></i>
          </button>
          <button className='searchIcon'>
            <i className='fa fa-search' aria-hidden='true'></i>
          </button>
          <button className='bars'>
            <i className='fa fa-bars' aria-hidden='true'></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
