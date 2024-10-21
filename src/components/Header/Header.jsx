import './Header.css'

export const Header = () => {
  return (
    <header className='header'>
      <nav aria-label='Main navigation'>
        <ul className='header-links'>
          <li>
            <a href='/'>
              <img
                src='../../../favicon.png'
                alt='Pokerizer logo'
                className='pokerizer-logo'
              />
              HOME
            </a>
          </li>
          <li>
            <a href='/about'>ABOUT</a>
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
