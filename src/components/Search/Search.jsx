import './Search.css'

import { useState } from 'react'
import { usePokemonList } from '../../hooks/usePokemonList'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Search = () => {
  const navigate = useNavigate()
  const [showList, setShowList] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const { pokemonList, error, loading } = usePokemonList()
  const [searchResults, setSearchResults] = useState([])

  if (error) console.error(error)

  useEffect(() => {
    setSearchResults(pokemonList)
  }, [pokemonList])

  const handleFocus = () => setShowList(true)
  const handleBlur = () => setShowList(false)

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

  const triggerNavigate = (route) => {
    navigate(`/${route}`) // TODO: add a const name to the route and check for the /name/:param
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchTerm('')
    e.target.elements.searchPokemon.blur()
    setSearchResults(pokemonList)
    triggerNavigate(searchTerm)
  }

  const handleSelect = (pokemonId) => {
    triggerNavigate(pokemonId)
  }

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
              <li key={pokemon.id} onMouseDown={() => handleSelect(pokemon.id)}>
                {pokemon.id} {pokemon.name}
              </li>
            ))
          )}
        </ul>
      )}
    </form>
  )
}
