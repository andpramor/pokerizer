import './Pokedex.css'

import { usePokemonList } from '../../../hooks/usePokemonList.js'
import { PokemonCard } from '../../Pokemon/PokemonCard/PokemonCard.jsx'

export const Pokedex = () => {
  // TODO: Check API docs to get filters for GAMES or at least GENERATIONS.
  const { pokemonList } = usePokemonList()

  return (
    <div className='pokedex'>
      <h1 className='pokedex-name bg-blue-gradient'>National pokedex</h1>
      <p style={{display: 'none'}}>Seen: x / 1025</p>
      <p style={{display: 'none'}}>Got: y /1025</p>
      <select>
        <option value='0'>National pokedex (every pokemon)</option>
        <option disabled> --- Gen I --- </option>
        <option value='1'>Kanto (Pokémon Red, Blue, Gold, Silver and Crystal)</option>
        <option disabled> --- Gen II --- </option>
        <option value='3'>Johto (Pokémon Gold, Silver and Crystal)</option>
        <option value='3'>Updated Johto (Pokémon Heart Gold and Soul Silver)</option>
      </select>
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
