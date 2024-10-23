import './Search.css'

import { useState } from 'react'
import { usePokemonList } from '../../hooks/usePokemonList'
import { useEffect } from 'react'

export const Search = () => {
  const [showList, setShowList] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const { pokemonList, error, loading } = usePokemonList()
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    setSearchResults(pokemonList)
  }, [pokemonList])

  const handleFocus = () => setShowList(true)
  const handleBlur = () => setShowList(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchTerm('')
    e.target.elements.searchPokemon.blur()
    setSearchResults(pokemonList)
    // TODO: actual fetch -> navigate to a detail view like RandomCard with the given searched pokemon or missingno
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

  if (error) console.error(error)

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='searchPokemon'
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder='Search Pokémon'
        aria-label='Search Pokémon'
      />
      {showList && (
        <ul>
          {loading ? (
            <li>Loading...</li>
          ) : (
            searchResults.map((pokemon) => (
              <li key={pokemon.id}>
                {pokemon.id} {pokemon.name}
              </li>
            ))
          )}
        </ul>
      )}
    </form>
  )
}
