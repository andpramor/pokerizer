import './Footer.css'

import { ReactLogo } from '../Icons/Icons.jsx'

export const Footer = () => {
  return (
    <footer className='footer'>
      <span className='footer-links'>
        <a href='https://andrespradomorgaz.com'><i className='bi bi-person-circle' />Portfolio</a>
        <a href='mailto:andres@andrespradomorgaz.com'><i className='bi bi-envelope-fill' />Contact</a>
        <a href='https://www.linkedin.com/in/apradomorgaz/'><i className='bi bi-linkedin' />LinkedIn</a>
        <a href='https://github.com/andpramor/'><i className='bi bi-github' />Github</a>
      </span>
      <span className='footer-name'>
        2024
        <ReactLogo width='1rem' height='auto' />
        Andrés Prado Morgaz</span>
    </footer>
  )
}
