import './Home.css'

import { proccessedPokemon } from '../../../mocks/proccessedPokemon.json'
import { PortraitCard } from '../../Pokemon/PortraitCard/PortraitCard'

export const Home = () => {
  return (
    <div className='home'>
      <h1>Welcome to Pokerizer!</h1>
      <PortraitCard pokemon={proccessedPokemon} />
    </div>
  )
}
