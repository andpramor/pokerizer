import './RandomSprite.css'

import { SPRITE_IMG } from '../../../services/constants'
import { getRandomPokemonNumber } from '../../../services/pokemonLogic'

export const RandomSprite = () => {
  const shiny = Math.random() > 0.5 ? true : false
  const pokemonId = getRandomPokemonNumber()

  const spriteSrc = `${SPRITE_IMG}${shiny ? 'shiny/' : ''}${pokemonId}.png`

  return (
    <>
      <img
        src={spriteSrc}
        alt={`${pokemonId} sprite`}
        className={`sprite ${shiny ? 'sprite-shiny-bg' : ''}`}
      />
    </>
  )
}
