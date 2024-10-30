import './Pokedex.css'

import { useState } from 'react'
import { PokemonCard } from '../../Pokemon/PokemonCard/PokemonCard.jsx'
import { usePokedex } from '../../../hooks/usePokedex.js'
import { POKEDEXES, TYPES } from '../../../services/constants.js'
import { useEffect } from 'react'

export const Pokedex = () => {
  const [pokedex, setPokedex] = useState('national')
  const [selectedType, setSelectedType] = useState('')
  const { pokedexList, loading } = usePokedex({ pokedex })

  const [searchTerm, setSearchTerm] = useState('')

  const [filteredList, setFilteredList] = useState([])

  useEffect(() => {
    setFilteredList(pokedexList)
  }, [pokedexList])

  const handlePokedexSelection = (event) => {
    setPokedex(event.target.value)
    setSelectedType('')
  }

  const handleTypeSelection = (event) => {
    const type = event.target.value
    setSelectedType(type)
    if (type === '') {
      setFilteredList(pokedexList)
      return
    }
    const newFilteredList = pokedexList.filter((pokemon) =>
      pokemon.types.includes(type)
    )
    setFilteredList(newFilteredList)
  }

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value
    setSearchTerm(newSearchTerm)

    // Ignore left side zeros, surrounding spaces and letter case for the filter:
    const normalizedSearchTerm = newSearchTerm
      .replace(/^0+/, '')
      .toLowerCase()
      .trim()
    const newSearchResults = pokedexList.filter(
      (pokemon) =>
        pokemon.id.toString().includes(String(normalizedSearchTerm)) ||
        pokemon.name.includes(normalizedSearchTerm)
    )
    setFilteredList(newSearchResults)
  }

  return (
    <div className='pokedex'>
      <h1 className='pokedex-name bg-blue-gradient'>
        {POKEDEXES[pokedex].name} Pokédex
      </h1>
      <p style={{ display: 'none' }}>Seen: x / 1025. Got: y / 1025.</p>
      {/* Filters: by type, by seen, by captured, by favourites */}
      <section className='pokedex-filters'>
        <label htmlFor='pokedex-selection'>
          <span>Pokédex</span>{' '}
          <select
            name='pokedex-selection'
            value={pokedex}
            onChange={handlePokedexSelection}
          >
            {Object.keys(POKEDEXES).map((dex) => (
              <option key={dex} value={dex}>
                {POKEDEXES[dex].name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor='pokedex-type' aria-label='Filter by type'>
          <span style={{ display: 'none' }}>Type</span>{' '}
          <select
            name='pokedex-type'
            value={selectedType}
            onChange={handleTypeSelection}
          >
            <option value=''>All types</option>
            {TYPES.map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase().concat(type.slice(1))} type
              </option>
            ))}
          </select>
        </label>
        <label htmlFor='pokedex-search'>
          <span>Search</span>{' '}
          <input type='text' name='pokedex-search' value={searchTerm} onChange={handleSearchChange} />
        </label>
      </section>
      {loading ? (
        <div className='loader' />
      ) : (
        <ul className='pokedex-list'>
          {filteredList.map((pokemon) => (
            <li key={pokemon.id}>
              <PokemonCard pokemon={pokemon} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
