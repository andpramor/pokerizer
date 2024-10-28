import { useNavigate } from 'react-router-dom'
import { SPRITE_IMG } from '../../../services/constants'
import './PokemonCard.css'

export const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/pokemonDetails/${pokemon.id}`)
  }
  return (
    <article className='pokemonCard bg-blue-gradient'>
      <h2 onClick={handleClick}>
        #{pokemon.id} {pokemon.name}
      </h2>
      <img
        onClick={handleClick}
        src={`${SPRITE_IMG}${pokemon.id}.png`}
        alt={`${pokemon.name} sprite`}
        loading='lazy'
      />
      <div className='pokemonCard-controls'>
        <label htmlFor='seenCheckbox'>
          <i className='bi bi-check-square'></i>{' '}
          Seen
        </label>
        <label htmlFor='capturedCheckbox'>
        <i className='bi bi-square'></i>{' '}
          Captured
        </label>
      </div>
    </article>
  )
}
