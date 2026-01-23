import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";



const Nav = () => {
  return (
    <nav>
      <ul className='Nav-List'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="contact">Contact</Link></li>
        <li><Link to="privacy-policy">Privacy Policy</Link></li>
        <li><Link to="terms-condition">Terms & Conditions</Link></li>
      <li>
  <Link to="github" className="nav-link">
    <FaGithub className="icon" />
    <span>GitHub</span>
  </Link>
   <Link to="/admin/products" className="nav-link">
    <MdOutlineAdminPanelSettings className="icon" />
    <span>Admin</span>
  </Link>
</li>

      </ul>
    </nav>
  )
}

export default Nav
