import { useState, useEffect } from 'react'
import { POKEMON_LIST_ENDPOINT } from '../services/constants'

export const usePokemonList = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const res = await fetch(POKEMON_LIST_ENDPOINT)
        const data = await res.json()
        const { results } = data
        const newPokemonList = results.map((pokemon) => {
          const pokemonId = pokemon.url.match(/\/(\d+)\/$/)[1] // The id is surrounded by slashes at the end of the url attribute of the pokemon object in the API response
          // const id = pokemonId.padStart(2, '0') // Pad ID with leading zero if necessary ("1" -> "01")
          return {
            id: pokemonId,
            name: pokemon.name
          }
        })
        setPokemonList(newPokemonList)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPokemonList()
  }, [])

  return { pokemonList, error, loading }
}
