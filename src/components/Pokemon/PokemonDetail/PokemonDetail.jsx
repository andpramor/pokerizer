import { useState } from 'react'
import { usePokemonDetails } from '../../../hooks/usePokemonDetails'
import './PokemonDetail.css'

import { useParams } from 'react-router-dom'
import { Type } from '../Type/Type'
import { EvolutionChain } from '../EvolutionChain/EvolutionChain'

export const PokemonDetail = () => {
  const { pokemonId } = useParams()
  const { pokemon, loadingPokemon, evolution, loadingEvolution } =
    usePokemonDetails({ pokemonId })
  const [showShiny, setShowShiny] = useState(false)

  const handleToggleShiny = () => setShowShiny((prev) => !prev)

  const handleSubmit = (e) => e.preventDefault()

  return (
    <div className='details'>
      {loadingPokemon ? (
        <div className='loader' />
      ) : (
        <>
          <section className='details-header'>
            <h1>
              #{pokemon.id} {pokemon.name}
            </h1>
            <div className='details-types'>
              {pokemon.types.map((type) => (
                <Type key={type} name={type} />
              ))}
            </div>
          </section>
          <section className='details-information'>
            <div className='details-sprite-side'>
              <img
                className={`details-sprite ${
                  showShiny ? 'sprite-shiny-bg' : ''
                }`}
                src={showShiny ? pokemon.sprite_shiny : pokemon.sprite}
                alt={`${showShiny ? 'Shiny ' : ''}${pokemon.name} sprite`}
              />
              <button
                className='details-shiny-toggler'
                onClick={handleToggleShiny}
              >
                {showShiny ? 'View normal form' : 'View shiny form'}
              </button>
            </div>
            <div className='details-stats'>
              <h2>Base stats</h2>
              {pokemon.stats.map((stat) => (
                <div key={stat.name} className='details-stat'>
                  <span>{stat.name}</span>
                  <span>{stat.base}</span>
                </div>
              ))}
            </div>
          </section>
          <section className='details-userInput'>
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
          <section className='details-evolutionChain'>
            {!loadingEvolution && <EvolutionChain evolution={evolution} />}
          </section>
        </>
      )}
    </div>
  )
}
