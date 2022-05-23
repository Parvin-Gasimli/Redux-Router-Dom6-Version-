import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from './Navbar'
const Shared = () => {
  return (
    <div>
            <Navbar />
            <section className='section'>
                <Outlet />
            </section>
    </div>
  )
}

export default Shared