import { useState, useEffect } from 'react'
import { PortraitCard } from '../../Pokemon/PortraitCard/PortraitCard'
import { getRandomPokemon } from '../../../services/pokemonLogic.js'

export const RandomCard = () => {
  const [pokemon, setPokemon] = useState({
    name: '',
    sprite: '',
    sprite_shiny: '',
    types: [],
    stats: []
  })

  useEffect(() => {
    const fetchPokemon = async () => {
      const fetchedPokemon = await getRandomPokemon()
      setPokemon(fetchedPokemon)
    }
    fetchPokemon()
  }, [])

  return <PortraitCard pokemon={pokemon} />
}
