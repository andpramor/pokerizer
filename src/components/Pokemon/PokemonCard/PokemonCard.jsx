import './PokemonCard.css'
import missingno from '../../../assets/missingno.webp'

import { Link } from 'react-router-dom'
import { SPRITE_IMG } from '../../../services/constants.js'
import { Type } from '../Type/Type.jsx'
import { useState } from 'react'

export const PokemonCard = ({ pokemon }) => {
  const [correct, setCorrect] = useState(true) // Used to display Missingno in case the sprite load throws an error.
  const [seen, setSeen] = useState(false)
  const [caught, setCaught] = useState(false) // Captured implies seen too

  const handleSeenChange = () => {
    if (seen) {
      setSeen(false)
      setCaught(false)
    } else {
      setSeen(true)
    }
  }

  const handleCaughtChange = () => {
    if (caught) setCaught(false)
    else {
      setSeen(true)
      setCaught(true)
    }
  }

  return (
    <article className='pokemonCard bg-blue-gradient'>
      <Link to={`/pokemonDetails/${pokemon.id}`}>
        <header className='pokemonCard-header'>
          <h2>
            #{pokemon.regionalId ?? pokemon.id}{' '}
            {pokemon.name.charAt(0).toUpperCase().concat(pokemon.name.slice(1))}
          </h2>
          {pokemon.regionalId != null && <p>National: #{pokemon.id}</p>}
        </header>
      </Link>
      <Link to={`/pokemonDetails/${pokemon.id}`}>
        {correct && (
          <img
            src={`${SPRITE_IMG}${pokemon.id}.png`}
            alt={`${pokemon.name} sprite`}
            onError={() => setCorrect(false)}
          />
        )}
        {!correct && (
          <img src={missingno} alt="Sprite not found, here's Missingno" />
        )}
      </Link>
      <div className='pokemonCard-types'>
        {pokemon.types.map((type) => (
          <Type key={type} name={type} />
        ))}
      </div>
      <div className='pokemonCard-controls'>
        <label htmlFor={`${pokemon.id}seenCheckbox`}>
          <input
            type='checkbox'
            name={`${pokemon.id}seenCheckbox`}
            id={`${pokemon.id}seenCheckbox`}
            value={seen}
            onChange={handleSeenChange}
          />
          {seen ? (
            <i className='bi bi-check-square' />
          ) : (
            <i className='bi bi-square' />
          )}{' '}
          <span>Seen</span>
        </label>
        <label htmlFor={`${pokemon.id}caughtCheckbox`}>
          <input
            type='checkbox'
            name={`${pokemon.id}caughtCheckbox`}
            id={`${pokemon.id}caughtCheckbox`}
            value={caught}
            onChange={handleCaughtChange}
          />
          {caught ? (
            <i className='bi bi-check-square' />
          ) : (
            <i className='bi bi-square' />
          )}{' '}
          <span>Caught</span>
        </label>
      </div>
    </article>
  )
}
