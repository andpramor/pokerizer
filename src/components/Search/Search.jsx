import './Search.css'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { usePokemonContext } from '../../hooks/usePokemonContext'
import { Type } from '../Pokemon/Type/Type.jsx'
import { SPRITE_IMG } from '../../services/constants'

export const Search = ({ closeMenu }) => {
  const navigate = useNavigate()
  const [showList, setShowList] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const { pokemonList, loading } = usePokemonContext()
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    setSearchResults(pokemonList)
  }, [pokemonList])

  const handleFocus = () => setShowList(true)
  const handleBlur = () => {
    setShowList(false)
    setSearchTerm('')
    setSearchResults(pokemonList)
  }

  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value
    setSearchTerm(newSearchTerm)

    // Ignore left side zeros, surrounding spaces and letter case for the filter:
    const normalizedSearchTerm = newSearchTerm
      .replace(/^0+/, '')
      .toLowerCase()
      .trim()
    const newSearchResults = pokemonList.filter(
      (pokemon) =>
        pokemon.id.toString().includes(String(normalizedSearchTerm)) ||
        pokemon.name.includes(normalizedSearchTerm)
    )
    setSearchResults(newSearchResults)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.target.blur()
      setSearchResults(pokemonList)
      setSearchTerm('')
    }
  }

  const triggerNavigate = (route) => {
    closeMenu()
    navigate(`/pokemonDetails/${route}`)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchResults.length > 0) {
      setSearchTerm('')
      e.target.elements.searchPokemon.blur()
      setSearchResults(pokemonList)
      triggerNavigate(searchResults[0].id)
    }
  }

  const handleSelect = (pokemonId) => {
    triggerNavigate(pokemonId)
  }

  return (
    <form onSubmit={handleSubmit} className='search'>
      <input
        type='text'
        name='searchPokemon'
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        placeholder='Search Pokémon'
        aria-label='Search Pokémon'
      />
      <ul
        className={`searchResults bg-blue-gradient ${
          showList ? 'searchResults_visible' : ''
        }`}
      >
        {loading ? (
          <li>Loading...</li>
        ) : searchResults.length === 0 ? (
          <li className='searchResults-noResults'>No results found</li>
        ) : (
          searchResults.map((pokemon) => (
            <li key={pokemon.id} onMouseDown={() => handleSelect(pokemon.id)}>
              <img
                src={`${SPRITE_IMG}${pokemon.id}.png`}
                alt={pokemon.name}
                loading='lazy'
              />
              <span className='searchResult-id'>{pokemon.id}</span>
              <span className='searchResult-name'>
                {pokemon.name
                  .charAt(0)
                  .toUpperCase()
                  .concat(pokemon.name.slice(1))}
              </span>
              <span
                className={`${
                  pokemon.types.length === 1
                    ? 'searchResult-type'
                    : 'searchResult-types'
                }`}
              >
                {pokemon.types.map((type) => (
                  <Type key={type} name={type} />
                ))}
              </span>
            </li>
          ))
        )}
      </ul>
    </form>
  )
}
