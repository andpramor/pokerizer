import { useState } from 'react'
import { useEffect } from 'react'

export const usePokedexFilters = ({ pokedexList }) => {
  const [selectedType, setSelectedType] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredList, setFilteredList] = useState([])

  useEffect(() => {
    let newFilteredList = pokedexList

    if (selectedType) {
      newFilteredList = newFilteredList.filter((pokemon) =>
        pokemon.types.includes(selectedType)
      )
    }

    // Ignore left side zeros, surrounding spaces and letter case for the filter:
    if (searchTerm) {
      const normalizedSearchTerm = searchTerm
        .replace(/^0+/, '')
        .toLowerCase()
        .trim()
      newFilteredList = newFilteredList.filter(
        (pokemon) =>
          pokemon.id.toString().includes(String(normalizedSearchTerm)) ||
          pokemon.name.toLowerCase().includes(normalizedSearchTerm)
      )
    }

    setFilteredList(newFilteredList)
  }, [pokedexList, selectedType, searchTerm])

  const handleTypeSelection = (event) => {
    setSelectedType(event.target.value)
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handlePokedexChange = () => {
    setSelectedType('')
    setSearchTerm('')
  }

  return {
    selectedType,
    searchTerm,
    filteredList,
    handleTypeSelection,
    handleSearchChange,
    handlePokedexChange
  }
}
