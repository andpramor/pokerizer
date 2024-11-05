import './Header.css'
import favicon from '../../../favicon.png'

import { Link, useNavigate } from 'react-router-dom'
import { Search } from '../Search/Search'
import { getRandomPokemonNumber } from '../../services/pokemonLogic'
import { useState } from 'react'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigate = useNavigate()
  const handleRandom = () => {
    const randomPokemon = getRandomPokemonNumber()
    setIsMenuOpen(false)
    navigate(`/pokemonDetails/${randomPokemon}`)
  }

  return (
    <header className='header'>
      <Link to='/' onClick={() => setIsMenuOpen(false)}>
        <img src={favicon} alt='Pokerizer logo' className='pokerizer-logo' />
      </Link>
      <label htmlFor='burger' className='burger-container'>
        <input
          type='checkbox'
          className='burger'
          name='burger'
          id='burger'
          checked={isMenuOpen}
          onChange={() => setIsMenuOpen(!isMenuOpen)}
        />
        <i className='bi bi-list burger-icon' />
        <i className='bi bi-x-lg burger-close' />
      </label>
      <nav aria-label='Main site navigation' className='header-navigation'>
        <ul className='header-links'>
          <li>
            <Search closeMenu={() => setIsMenuOpen(false)} />
          </li>
          <li onClick={handleRandom} className='header-link'>
            RANDOM POKÉMON
          </li>
          <li>
            <Link to='/pokedex' onClick={() => setIsMenuOpen(false)}>
              POKÉDEX
            </Link>
          </li>
        </ul>
        <ul className='user-links'>
          <li style={{ display: 'none' }}>
            <Link to='/login' onClick={() => setIsMenuOpen(false)}>
              Log in/out
            </Link>
          </li>
          <li style={{ display: 'none' }}>
            <Link to='/singup' onClick={() => setIsMenuOpen(false)}>
              Sign up
            </Link>
          </li>
          <li>
            <Link to='/about' onClick={() => setIsMenuOpen(false)}>
              ABOUT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
