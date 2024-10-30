import { useState, useEffect } from 'react'
import { POKEMON_TYPE_URLS } from '../services/constants'

export const usePokemonList = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPokemonList = async () => {
      // Check if there's a cached list in localStorage
      const storedList = localStorage.getItem('pokemonList')
      if (storedList) {
        setPokemonList(JSON.parse(storedList))
        setLoading(false)
        return
      }

      const pokemonMap = new Map()

      try {
        await Promise.all(
          POKEMON_TYPE_URLS.map(async (url) => {
            try {
              const response = await fetch(url)
              const data = await response.json()
              const typeName = data.name

              data.pokemon.forEach((pokemonEntry) => {
                const { name, url } = pokemonEntry.pokemon
                const id = Number(url.match(/\/(\d+)\/$/)[1]) // The id is surrounded by slashes at the end of the url attribute of the pokemon object in the API response
                const slot = pokemonEntry.slot

                // Initialize pokemon if it doesn't already exist in the map
                if (!pokemonMap.has(name)) {
                  pokemonMap.set(name, { id, name, types: [] })
                }

                // Retrieve the pokemon entry and set the type in its correct slot:
                pokemonMap.get(name).types[slot - 1] = typeName // slot can be 1 or 2
              })
            } catch (error) {
              console.error(`Error processing ${url}: ${error.message}`)
            }
          })
        )

        // Convert the map to an array of Pokémon objects
        const newPokemonList = Array.from(pokemonMap.values()).sort()
        setPokemonList(newPokemonList)
        localStorage.setItem('pokemonList', JSON.stringify(newPokemonList))
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
