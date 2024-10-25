import { useState, useEffect } from 'react'
import { getPokemonById } from '../services/pokemonLogic.js'

export const usePokemonDetails = ({ pokemonId }) => {
  const [pokemon, setPokemon] = useState({
    id: '',
    name: '',
    sprite: '',
    sprite_shiny: '',
    types: [],
    stats: []
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getPokemon = async () => {
      setLoading(true)
      try {
        const pokemonData = await getPokemonById(pokemonId)
        setPokemon(pokemonData)
      } catch (error) {
        console.error('Error fetching pokemon data:', error)
      } finally {
        setLoading(false)
      }
    }

    if (pokemonId) {
      getPokemon()
    }
  }, [pokemonId])

  return { pokemon, loading }
}
