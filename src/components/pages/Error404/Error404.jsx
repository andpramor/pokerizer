import './Error404.css'
import missingno from '../../../assets/missingno.webp'

export const Error404 = () => {
  return (
    <div className='error404'>
      <img src={missingno} alt='Missingno sprite' width='150px' />
      <h2>Oops!</h2>
      <p>Something didn&apos;t go as expected</p>
      <p>Missing page</p>
    </div>
  )
}
