import React from 'react'
import './UserLayout.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Home from '../pages/Home'
import {Outlet} from 'react-router-dom'

const UserLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />

    </>
  )
}

export default UserLayout