import { useState } from 'react'
import { usePokemonDetails } from '../../../hooks/usePokemonDetails'
import './PokemonDetail.css'

import { useParams } from 'react-router-dom'
import { Type } from '../Type/Type'

export const PokemonDetail = () => {
  const { pokemonId } = useParams()
  const { pokemon, loading } = usePokemonDetails({ pokemonId })
  const [showShiny, setShowShiny] = useState(false)

  const handleToggleShiny = () => setShowShiny((prev) => !prev)

  return (
    <div className='details'>
      {loading ? (
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
              {pokemon.stats.map((stat) =>
                <div key={stat.name} className='details-stat'>
                  <span>{stat.name}</span>
                  <span>{stat.base}</span>
                </div>
              )}
              </div>
          </section>
        </>
      )}
    </div>
  )
}
