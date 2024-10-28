import './EvolutionChain.css'

import { SPRITE_IMG } from '../../../services/constants.js'
import { useNavigate } from 'react-router-dom'

export const EvolutionChain = ({ evolution }) => {
  // TODO: gestionar triggers, por ahora, si no es por nivel o con item: special xD
  const navigate = useNavigate()

  const handleClick = (id) => navigate(`/pokemonDetails/${id}`)

  return (
    <section className='evolution-container'>
      <h2>Evolution</h2>
      <article className='evolution'>
        {Object.values(evolution).map((stage, index) => (
          <>
            {index !== 0 && <i className='evolution-separator bi bi-arrow-right-square' />}
            <section key={index} className='evolution-stage'>
              {stage.map((pokemon) => (
                <div key={pokemon.id} className='evolution-pokemon'>
                  <div className='evolution-member'>
                    <img
                      onClick={() => handleClick(pokemon.id)}
                      src={`${SPRITE_IMG}${pokemon.id}.png`}
                      alt={`${pokemon.name}'s sprite`}
                    />
                    <h3 onClick={() => handleClick(pokemon.id)}>
                      #{pokemon.id}{' '}
                      {pokemon.name
                        .charAt(0)
                        .toUpperCase()
                        .concat(pokemon.name.slice(1))}
                    </h3>
                  </div>
                  {pokemon.trigger !== 'unknown' && (
                    <div>
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
          </>
        ))}
      </article>
    </section>
  )
}
