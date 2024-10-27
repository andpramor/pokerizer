import { useState, useEffect } from 'react'
import { PortraitCard } from '../../Pokemon/PortraitCard/PortraitCard'
import { getRandomPokemon } from '../../../services/pokemonLogic.js'

import './RandomCard.css'

export const RandomCard = () => {
  const [pokemon, setPokemon] = useState({
    name: '',
    sprite: '',
    sprite_shiny: '',
    types: [],
    stats: []
  })
  const [shiny, setShiny] = useState(false)

  const fetchPokemon = async () => {
    const fetchedPokemon = await getRandomPokemon()
    setPokemon(fetchedPokemon)
  }

  useEffect(() => {
    fetchPokemon()
  }, [])

  const handleShinyToggle = () => {
    setShiny((prevShiny) => !prevShiny)
  }

  const handleSubmit = (e) => e.preventDefault()

  return (
    <div className='randomCard'>
      <button onClick={fetchPokemon}>Get another one</button>
      <button onClick={handleShinyToggle}>Toggle shiny</button>
      {pokemon && <PortraitCard pokemon={pokemon} shiny={shiny} />}
      <section className='randomCard-interaction'>
        <form onSubmit={handleSubmit}>
          Add to
          <select>
            <option value='1'>Team 1</option>
            <option value='2' disabled>
              Team 2
            </option>
            <option value='3' disabled>
              Team 3
            </option>
          </select>
          <button type='submit'>Confirm</button>
        </form>
        <button>Add to / Remove from Favs</button>
      </section>
    </div>
  )
}
