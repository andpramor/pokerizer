import './PokemonDetail.css'

import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { usePokemonDetails } from '../../../hooks/usePokemonDetails.js'
import { Type } from '../Type/Type.jsx'
import { EvolutionChain } from '../EvolutionChain/EvolutionChain.jsx'
import { GAMES } from '../../../services/constants.js'

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
          <section className='details-userInputs'>
            <button className='details-addToFavs'>
              <i className='bi bi-heart-fill' /> Add to /{' '}
              <i className='bi bi-heart' /> Remove from Favs
            </button>
            <form onSubmit={handleSubmit} className='details-addToTeam'>
              <span>Add to</span>
              <div className='details-teamSelect'>
                <select>
                  <option value='1'>Team 1</option>
                  <option value='2' disabled>
                    Team 2
                  </option>
                  <option value='3' disabled>
                    Team 3
                  </option>
                </select>
              </div>
              <button type='submit'>Confirm</button>
            </form>
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
          {!loadingEvolution && <EvolutionChain evolution={evolution} />}
          {pokemon.games.length !== 0 && (
            <section className='details-games'>
              <h3>Games {pokemon.name} appears in</h3>
              <ul>
                {pokemon.games.length !== 0 &&
                  pokemon.games.map((game) => (
                    <li key={game}>{GAMES[game]}</li>
                  ))}
              </ul>
            </section>
          )}
        </>
      )}
    </div>
  )
}
