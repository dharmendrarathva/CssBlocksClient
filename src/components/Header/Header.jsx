import React from 'react'
import '../Header/Header.css'
import Logo from '../Logo/Logo'
import Nav from '../NavigationLinks/Nav'
import Actions from '../Auth/Actions'

const Header = () => {

  return (

    <header className='Header-Wrapper'>
            <Logo />
            <Nav />
            <Actions />


    </header>
      
  )
}

export default Header
