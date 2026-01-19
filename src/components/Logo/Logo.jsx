import React from 'react'
import './Logo.css'
import { Link,NavLink } from 'react-router-dom'

const Logo = () => {
  return (
 
    <NavLink to="/">
         <div className='Logo'>


<svg
  width="35"
  height="35"
  viewBox="136 136 240 240"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient id="gradPurple" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6D28D9"/>
      <stop offset="100%" stop-color="#A855F7"/>
    </linearGradient>

    <linearGradient id="gradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B82F6"/>
      <stop offset="100%" stop-color="#60A5FA"/>
    </linearGradient>
  </defs>

  <rect x="136" y="136" width="100" height="100" rx="50" fill="url(#gradPurple)" />

  <rect x="276" y="136" width="100" height="100" rx="50" fill="url(#gradBlue)" />

  <rect x="136" y="276" width="100" height="100" rx="50" fill="url(#gradBlue)" />

  <rect x="276" y="276" width="100" height="100" rx="50" fill="url(#gradPurple)" />

</svg>

      <h1 className='Logo-first'>UiSnaps</h1>
      {/* <h1 className='Logo-second'>Blocks</h1> */}
    </div>
    </NavLink>
  )
}

export default Logo


