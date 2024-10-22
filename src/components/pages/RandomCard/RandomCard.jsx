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
    getRandomPokemon().then((pokemon) => setPokemon(pokemon))
  }, [])

  return <PortraitCard pokemon={pokemon} shiny />
}
