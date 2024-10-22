import './Type.css'

export const Type = ({ name }) => {
  return <span className={`type type-${name}`}>{name}</span>
}
