import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul className='Nav-List'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="contact">Contact</Link></li>
        <li><Link to="privacy-policy">Privacy Policy</Link></li>
        <li><Link to="terms-condition">Terms & Conditions</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
