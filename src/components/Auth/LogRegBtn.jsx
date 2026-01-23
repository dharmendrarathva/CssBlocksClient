

import React from 'react'
import './LogRegBtn.css'
import { useNavigate } from 'react-router-dom'

const LogRegBtn = () => {


  const navigate = useNavigate();
  return (
    <div className='Button-Wrapper'>
      <button className='Login-Button' onClick={()=>navigate('/login')}>

  
        Login
        
    </button>
    <p className='btn-Divider'>Or</p>
    <button className='Register-Button' onClick={()=>navigate('/register')}>
        Register
    </button>
    </div>

  )
}

export default LogRegBtn