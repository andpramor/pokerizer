import { RandomSprite } from '../../Pokemon/RandomSprite/RandomSprite'
import './Home.css'

export const Home = () => {
  return (
    <div className='home'>
      <h1 className='home-title'>Welcome to Pokerizer!</h1>
      <RandomSprite />
    </div>
  )
}
