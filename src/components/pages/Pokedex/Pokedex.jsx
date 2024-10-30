import './Pokedex.css'

import { useState } from 'react'
import { PokemonCard } from '../../Pokemon/PokemonCard/PokemonCard.jsx'
import { usePokedex } from '../../../hooks/usePokedex.js'
import { POKEDEXES } from '../../../services/constants.js'

export const Pokedex = () => {
  const [pokedex, setPokedex] = useState('hoenn') // coger del input y llamar al usePokedex con pokedex
  const { pokedexList, loading } = usePokedex({ pokedex })

  const handleSelection = (event) => {
    setPokedex(event.target.value)
  }

  return (
    <div className='pokedex'>
      <h1 className='pokedex-name bg-blue-gradient'>National pokedex</h1>
      <p style={{ display: 'none' }}>Seen: x / 1025. Got: y / 1025.</p>
      {/* Filters: by type, by seen, by captured, by favourites */}
      <label htmlFor='pokedex-selection'>
        <span>Select a pokédex</span>{' '}
        <select name='pokedex-selection' value={pokedex} onChange={handleSelection}>
          {Object.keys(POKEDEXES).map((dex) => (
            <option key={dex} value={dex}>
              {POKEDEXES[dex].name}
            </option>
          ))}
        </select>
      </label>
      {loading ? (
        <div className='loader' />
      ) : (
        <>
          <label htmlFor='pokedex-search'>
            <span>Search Pokémon</span>{' '}
            <input type='text' name='pokedex-search' />
          </label>
          <ul className='pokedex-list'>
            {pokedexList.map((pokemon) => (
              <li key={pokemon.id}>
                <PokemonCard pokemon={pokemon} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
