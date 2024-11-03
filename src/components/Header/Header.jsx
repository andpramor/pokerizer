import './Header.css'
import favicon from '../../../favicon.png'

import { Link, useNavigate } from 'react-router-dom'
import { Search } from '../Search/Search'
import { getRandomPokemonNumber } from '../../services/pokemonLogic'

export const Header = () => {
  const navigate = useNavigate()
  const handleRandom = () => {
    const randomPokemon = getRandomPokemonNumber()
    navigate(`/pokemonDetails/${randomPokemon}`)
  }

  return (
    <header className='header'>
      <Link to='/'>
        <img src={favicon} alt='Pokerizer logo' className='pokerizer-logo' />
      </Link>
      <i className='bi bi-list burger' />
      <section className='header-navigation'>
        <nav aria-label='Main navigation'>
          <ul className='header-links'>
            <li>
              <Search />
            </li>
            <li onClick={handleRandom} className='header-link'>
              Random Pokémon
            </li>
            <li>
              <Link to='/pokedex'>Your Pokedex</Link>
            </li>
          </ul>
        </nav>
        <nav aria-label='About and authentication related navigation'>
          <ul className='user-links'>
            <li style={{ display: 'none' }}>
              <Link to='/login'>Log in/out</Link>
            </li>
            <li style={{ display: 'none' }}>
              <Link to='/singup'>Sign up</Link>
            </li>
            <li>
              <Link to='/about'>ABOUT</Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  )
}
