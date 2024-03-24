import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {

  const items=['HOME','ELECTRONICS','BOOKS','MUSIC','MOVIES','CLOTHING','GAMES','FURNITURE','ELECTRONICS','TRAVEL','BOTANICAL','CATEGORY NAME']
    console.log("hello")
  return (
    <main style={{minHeight:'100vh'}}>
      <Navbar items={items}/>
      <Outlet/>
    </main>
  )
}

export default Layout