import './Home.css'

import { proccessedPokemon } from '../../../mocks/proccessedPokemon.json'
import { PortraitCard } from '../../Pokemon/PortraitCard/PortraitCard'
import { LandscapeCard } from '../../Pokemon/LandscapeCard/LandscapeCard'

export const Home = () => {
  return (
    <div className='home'>
      <h1>Welcome to Pokerizer!</h1>
      <PortraitCard pokemon={proccessedPokemon} />
      <LandscapeCard pokemon={proccessedPokemon} />
    </div>
  )
}
