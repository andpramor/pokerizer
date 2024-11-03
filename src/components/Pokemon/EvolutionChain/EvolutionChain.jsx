import './EvolutionChain.css'

import { SPRITE_IMG } from '../../../services/constants.js'
import { Link } from 'react-router-dom'

export const EvolutionChain = ({ evolution }) => {
  return (
    <section className='evolution-container'>
      <h2>Evolution</h2>
      <article className='evolution'>
        {Object.values(evolution).map((stage, index) => (
          <div key={index} className='evol'>
            {index !== 0 && (
              <i className='evolution-separator bi bi-arrow-right-square' />
            )}
            <section className='evolution-stage'>
              {stage.map((pokemon) => (
                <div key={pokemon.id} className='evolution-pokemon'>
                  <div className='evolution-member'>
                    <Link to={`/pokemonDetails/${pokemon.id}`}>
                      <img
                        src={`${SPRITE_IMG}${pokemon.id}.png`}
                        alt={`${pokemon.name}'s sprite`}
                      />
                    </Link>
                    <Link to={`/pokemonDetails/${pokemon.id}`}>
                      <h3>
                        #{pokemon.id}{' '}
                        {pokemon.name
                          .charAt(0)
                          .toUpperCase()
                          .concat(pokemon.name.slice(1))}
                      </h3>
                    </Link>
                  </div>
                  {pokemon.trigger !== 'unknown' && (
                    <div className='evolution-info'>
                      {pokemon.trigger === 'level-up' &&
                      pokemon.minLevel !== null ? (
                        <>Level {pokemon.minLevel}</>
                      ) : pokemon.trigger === 'use-item' ? (
                        <>{pokemon.item}</>
                      ) : (
                        <>special</>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </section>
          </div>
        ))}
      </article>
    </section>
  )
}
