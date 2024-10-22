import './PortraitCard.css'

import { Type } from '../Type/Type.jsx'

export const PortraitCard = ( {pokemon: {name, sprite, sprite_shiny, stats, types}, shiny = false}) => {
  return (
    <>
      {name && (
        <div className='portraitCard'>
          <div
            className={`portraitCard-content ${
              shiny ? 'portraitCard_shiny' : ''
            }`}
          >
            <section className='portraitCard-front'>
              <h2 translate='no'>{name}</h2>
              <div className='portraitCard-sprite'>
                {shiny ? (
                  <img
                    src={sprite_shiny}
                    alt={`${name}'s front sprite`}
                  />
                ) : (
                  <img
                    src={sprite}
                    alt={`${name}'s front sprite`}
                  />
                )}
              </div>
              <section className='portraitCard-types'>
                {types.map((type) => (
                  <Type key={type} name={type} />
                ))}
              </section>
            </section>

            <section className='portraitCard-back'>
              <header>
                <h4>{name} base stats</h4>
              </header>
              {stats && (
                <ul className='portraitCard-statsList'>
                  {stats.map(({base, name}) => (
                    <li key={name} className='portraitCard-stat'>
                      <span>
                        {name.toUpperCase()}
                      </span>
                      <span>{base}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </div>
        </div>
      )}
    </>
  )
}
