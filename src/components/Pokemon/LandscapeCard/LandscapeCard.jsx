import './LandscapeCard.css'
import { Type } from '../Type/Type.jsx'

export const LandscapeCard = ({
  pokemon: { id, name, sprite, sprite_shiny, types },
  shiny = false
}) => {
  return (
    <div className={`landscapeCard ${shiny ? 'landscapeCard_shiny' : ''}`}>
      <img
        style={{ width: '100%' }}
        src={`${shiny ? sprite_shiny : sprite}`}
        alt={`${name}${shiny ? ' shiny' : ''}`}
      />
      <div className='landscapeCard-info'>
        <section className='landscapeCard-types'>
          {types.map((type) => (
            <div key={type}>
              <Type name={type} />
            </div>
          ))}
        </section>
        <section className='landscapeCard-name'>
          {`${id} ${shiny ? ' Shiny' : ''} ${name}`}
        </section>
      </div>
    </div>
  )
}
