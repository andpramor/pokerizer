import './Header.css'
import favicon from '../../../favicon.png'

import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='header'>
      <nav aria-label='Main navigation'>
        <ul className='header-links'>
          <li>
            <Link to='/' >
              <img
                src={favicon}
                alt='Pokerizer logo'
                className='pokerizer-logo'
              />
              HOME
            </Link>
          </li>
          <li>
            <Link to='/about'>ABOUT</Link>
          </li>
        </ul>
      </nav>
      <nav aria-label='User related navigation'>
        <ul className='user-links'>
          <li>
            <a href=''>Log in / out</a>
          </li>
          <li>
            <a href=''>Sign up</a>
          </li>
          <li>
            <a href='/profile'>
              <i className='bi bi-person-circle' /> Profile
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
