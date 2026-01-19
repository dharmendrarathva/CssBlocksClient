import React from 'react'
import './LogRegBtn.css'

const LogRegBtn = () => {
  return (
    <div className='Button-Wrapper'>
      <button className='Login-Button'>
        Login
    </button>
    <p className='btn-Divider'>Or</p>
    <button className='Register-Button'>
        Register
    </button>
    </div>
  )
}

export default LogRegBtn