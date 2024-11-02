import './Pokedex.css'

import { useState } from 'react'
import { usePokedex } from '../../../hooks/usePokedex.js'
import { usePokedexFilters } from '../../../hooks/usePokedexFilters.js'

import { PokemonCard } from '../../Pokemon/PokemonCard/PokemonCard.jsx'

import { POKEDEXES, TYPES } from '../../../services/constants.js'

export const Pokedex = () => {
  const [pokedex, setPokedex] = useState('national')
  const { pokedexList, loading } = usePokedex({ pokedex })
  const {
    selectedType,
    searchTerm,
    filteredList,
    handleTypeSelection,
    handleSearchChange,
    handlePokedexChange
  } = usePokedexFilters({ pokedexList }) // TODO: { pokedexList } -> { pokedexList, collectionStatus, onlyFavourites } o mejor, tener esos estados en el hook y devolver del hook los handlers como con los handleXChange
  const [collectionState, setCollectionState] = useState('any')

  // Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20

  const endIndex = currentPage * itemsPerPage
  const startIndex = endIndex - itemsPerPage
  const currentPagePokemon = filteredList.slice(startIndex, endIndex)

  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredList.length / itemsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1)
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1)
    }
  }

  const handleFirstPage = () => setCurrentPage(1)
  const handleLastPage = () => {
    setCurrentPage(Math.ceil(filteredList.length / itemsPerPage))
  }

  const handlePokedexSelection = (event) => {
    setPokedex(event.target.value)
    handlePokedexChange()
  }

  const handleCollectionState = (e) => {
    setCollectionState(e.target.value)
  }

  return (
    <div className='pokedex'>
    <h1 className='pokedex-name bg-blue-gradient'>
      {POKEDEXES[pokedex].name} Pokédex
    </h1>
    <p style={{ display: 'none' }}>Seen: x / 1025. Got: y / 1025.</p>
    <section className='pokedex-filters'>
      <label
        className='game-selection'
        htmlFor='game-selection'
        aria-label='Game selection'
      >
        <span style={{ display: 'none' }}>Pokédex</span>{' '}
        <select
          name='game-selection'
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
          {TYPES.filter((type) => type !== 'stellar').map((type) => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase().concat(type.slice(1))} type
            </option>
          ))}
        </select>
      </label>
      <input
        type='text'
        name='pokedex-search'
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder='Search'
        aria-label='Search Pokémon'
      />
      <div className='collection-state'>
        <label htmlFor='any-collection-state'>
          <input
            type='radio'
            name='any-collection-state'
            id='any-collection-state'
            value='any'
            checked={collectionState === 'any'}
            onChange={handleCollectionState}
            style={{ display: 'none' }}
          />
          {collectionState === 'any' ? <i className='bi bi-check-circle' /> : <i className='bi bi-circle' />}
          <span>All</span>
        </label>
        <label htmlFor='seen-collection-state'>
          <input
            type='radio'
            name='seen-collection-state'
            id='seen-collection-state'
            value='seen'
            checked={collectionState === 'seen'}
            onChange={handleCollectionState}
            style={{ display: 'none' }}
          />
          {collectionState === 'seen' ? <i className='bi bi-check-circle' /> : <i className='bi bi-circle' />}
          <span>Seen</span>
        </label>
        <label htmlFor='captured-collection-state'>
          <input
            type='radio'
            name='captured-collection-state'
            id='captured-collection-state'
            value='captured'
            checked={collectionState === 'captured'}
            onChange={handleCollectionState}
            style={{ display: 'none' }}
          />
          {collectionState === 'captured' ? <i className='bi bi-check-circle' /> : <i className='bi bi-circle' />}
          <span>Captured</span>
        </label>
      </div>
    </section>
      {loading ? (
        <div className='loader' />
      ) : (
        <>
          <ul className='pokedex-list'>
            {currentPagePokemon.map((pokemon) => (
              <li key={pokemon.id}>
                <PokemonCard pokemon={pokemon} />
              </li>
            ))}
          </ul>
          <div className='pokedex-pagination'>
            {currentPage !== 1 && (
              <i
                className='bi bi-arrow-left-square-fill'
                onClick={handleFirstPage}
                aria-label='Go to the first page'
              />
            )}
            {currentPage !== 1 && (
              <i
                className='bi bi-arrow-left-square'
                onClick={handlePreviousPage}
                aria-label='Go to the previous page'
              />
            )}
            <span>Page {currentPage}</span>
            {currentPage < Math.ceil(filteredList.length / itemsPerPage) && (
              <i
                className='bi bi-arrow-right-square'
                onClick={handleNextPage}
                aria-label='Go to the next page'
              />
            )}
            {currentPage < Math.ceil(filteredList.length / itemsPerPage) && (
              <i
                className='bi bi-arrow-right-square-fill'
                onClick={handleLastPage}
                aria-label='Go to the last page'
              />
            )}
          </div>
        </>
      )}
    </div>
  )
}
