import './Search.css'

import { useState } from 'react'
import { usePokemonList } from '../../hooks/usePokemonList'

export const Search = () => {
  const [showList, setShowList] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const { pokemonList, error, loading } = usePokemonList()

  const handleFocus = () => setShowList(true)
  const handleBlur = () => setShowList(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchTerm('')
    e.target.elements.searchPokemon.blur()
    // TODO: actual fetch
  }
  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value
    setSearchTerm(newSearchTerm)
    // TODO: Filter list
  }

  if(error) console.error(error)

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
            pokemonList.map((pokemon) => (
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
