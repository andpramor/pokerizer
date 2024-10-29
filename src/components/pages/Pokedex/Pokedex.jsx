import './Pokedex.css'

import { usePokemonList } from '../../../hooks/usePokemonList.js'
import { PokemonCard } from '../../Pokemon/PokemonCard/PokemonCard.jsx'

export const Pokedex = () => {
  const { pokemonList } = usePokemonList()

  return (
    <div className='pokedex'>
      <h1 className='pokedex-name bg-blue-gradient'>National pokedex</h1>
      <p style={{ display: 'none' }}>Seen: x / 1025. Got: y / 1025.</p>
      {/* Filters: by type, by seen, by captured, by favourites */}
      <label htmlFor='pokedex-selection'>
        <span>Select a pokédex</span>{' '}
        <select name='pokedex-selection'>
          <option value='0'>National pokedex (every pokemon)</option>
          <option disabled> --- Gen I --- </option>
          <option value='1'>
            Kanto (Pokémon Red, Blue, Gold, Silver and Crystal)
          </option>
          <option disabled> --- Gen II --- </option>
          <option value='3'>Johto (Pokémon Gold, Silver and Crystal)</option>
          <option value='3'>
            Updated Johto (Pokémon Heart Gold and Soul Silver)
          </option>
        </select>
      </label>
      <label htmlFor='pokedex-search'>
        <span>Search Pokémon</span> <input type='text' name='pokedex-search' />
      </label>
      <ul className='pokedex-list'>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>
            <PokemonCard pokemon={pokemon} />
          </li>
        ))}
      </ul>
    </div>
  )
}
