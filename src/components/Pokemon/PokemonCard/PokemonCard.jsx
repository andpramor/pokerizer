import './PokemonCard.css'

import { Link } from 'react-router-dom'
import { SPRITE_IMG } from '../../../services/constants.js'
import { Type } from '../Type/Type.jsx'

export const PokemonCard = ({ pokemon }) => {
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
        <img
          src={`${SPRITE_IMG}${pokemon.id}.png`}
          alt={`${pokemon.name} sprite`}
          loading='lazy'
        />
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
