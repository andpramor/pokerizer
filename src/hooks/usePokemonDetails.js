import { useState, useEffect } from 'react'
import { getPokemonById, getEvolutionChain } from '../services/pokemonLogic.js'

export const usePokemonDetails = ({ pokemonId }) => {
  const [pokemon, setPokemon] = useState({
    id: '',
    name: '',
    sprite: '',
    sprite_shiny: '',
    types: [],
    stats: []
  })
  const [evolution, setEvolution] = useState({})
  const [loadingPokemon, setLoadingPokemon] = useState(true)
  const [loadingEvolution, setLoadingEvolution] = useState(true)

  useEffect(() => {
    const getPokemon = async () => {
      setLoadingPokemon(true)
      try {
        const pokemonData = await getPokemonById(pokemonId)
        setPokemon(pokemonData)
      } catch (error) {
        console.error('Error fetching pokemon data:', error)
      } finally {
        setLoadingPokemon(false)
      }
    }
  
    const getEvolutionInfo = async () => {
      setLoadingEvolution(true)
      try {
        const evolutionChain = await getEvolutionChain(pokemonId)
        setEvolution(evolutionChain)
      } catch (error) {
        console.error('Error fetching the evolution chain data:', error)
      } finally {
        setLoadingEvolution(false)
      }
    }

    if (pokemonId) {
      getPokemon().then(getEvolutionInfo())
    }
  }, [pokemonId])

  return { pokemon, loadingPokemon, evolution, loadingEvolution }
}
