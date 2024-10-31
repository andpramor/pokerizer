import './PokemonCard.css'
import missingno from '../../../assets/missingno.webp'

import { Link } from 'react-router-dom'
import { SPRITE_IMG } from '../../../services/constants.js'
import { Type } from '../Type/Type.jsx'
import { useState } from 'react'

export const PokemonCard = ({ pokemon }) => {
  const [correct, setCorrect] = useState(true)

  return (
    <article className='pokemonCard bg-blue-gradient'>
      <Link to={`/pokemonDetails/${pokemon.id}`}>
        <header className='pokemonCard-header'>
          <h2>
            #{pokemon.regionalId ? pokemon.regionalId : pokemon.id}{' '}
            {pokemon.name.charAt(0).toUpperCase().concat(pokemon.name.slice(1))}
          </h2>
          {pokemon.regionalId && <p>National: #{pokemon.id}</p>}
        </header>
      </Link>
      <Link to={`/pokemonDetails/${pokemon.id}`}>
        {correct && <img
          src={`${SPRITE_IMG}${pokemon.id}.png`}
          alt={`${pokemon.name} sprite`}
          onError={() => setCorrect(false)}
        />}
        {!correct && <img src={missingno} alt="Sprite not found, here's Missingno" />}
      </Link>
      <div className='pokemonCard-types'>
        {pokemon.types.map((type) => (
          <Type key={type} name={type} />
        ))}
      </div>
      <div className='pokemonCard-controls'>
        <label htmlFor='seenCheckbox'>
          <i className='bi bi-check-square'></i> Seen
        </label>
        <label htmlFor='capturedCheckbox'>
          <i className='bi bi-square'></i> Captured
        </label>
      </div>
    </article>
  )
}
