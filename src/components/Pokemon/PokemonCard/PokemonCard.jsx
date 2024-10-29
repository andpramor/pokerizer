import './PokemonCard.css'

import { SPRITE_IMG } from '../../../services/constants'
import { Link } from 'react-router-dom'

export const PokemonCard = ({ pokemon }) => {
  return (
    <article className='pokemonCard bg-blue-gradient'>
      <Link to={`/pokemonDetails/${pokemon.id}`}>
        <h2>
          #{pokemon.id} {pokemon.name}
        </h2>
      </Link>
      <Link to={`/pokemonDetails/${pokemon.id}`}>
        <img
          src={`${SPRITE_IMG}${pokemon.id}.png`}
          alt={`${pokemon.name} sprite`}
          loading='lazy'
        />
      </Link>
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
