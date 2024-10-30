import { useState, useEffect } from 'react'
import { usePokemonContext } from './usePokemonContext'
import { POKEDEXES } from '../services/constants.js'

export const usePokedex = ({ pokedex = 'national' } = {}) => {
  const { pokemonList } = usePokemonContext()
  const [pokedexList, setPokedexList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (pokedex === 'national') {
      setPokedexList(pokemonList)
      setLoading(false)
      return
    }

    const fetchPokedex = async () => {
      // Check if its cached in localStorage
      const storedPokedex = localStorage.getItem(pokedex)
      if (storedPokedex) {
        setPokedexList(JSON.parse(storedPokedex))
        setLoading(false)
        return
      }

      try {
        const url = POKEDEXES[pokedex].url
        const response = await fetch(url)
        const data = await response.json()
        const unsortedPokemonList = data.pokemon_entries.map((pokemon) => {
          const nationalId = pokemon.pokemon_species.url.match(/\/(\d+)\/$/)[1]
          const typesArray = pokemonList.find(elem => elem.id === nationalId)

          return {
          id: nationalId,
          name: pokemon.pokemon_species.name,
          regionalId: Number(pokemon.entry_number),
          types: typesArray ? typesArray.types : []
        }})

        const newPokemonList = unsortedPokemonList.sort()
        setPokedexList(newPokemonList)
      } catch (error) {
        console.log(error.message)
      } finally {
        setLoading(false)
      }

      // Al mapear para quedarme con id (de la url), regionalId y name, añadir también el campo types de pokemonList haciendo types: pokemonList.filter(id===id).types
    }

    fetchPokedex()
  }, [pokemonList, pokedex])

  return { pokedexList, loading }
}
