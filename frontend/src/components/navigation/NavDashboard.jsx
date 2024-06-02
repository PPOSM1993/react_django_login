import React from 'react'
import { Link } from 'react-router-dom'

const NavDashboard = () => {
  return (
      <nav className="navbar">
        <div className="container">
          <Link to='/dashboard'>
            <nav className="logo">Logo</nav>
          </Link>
        </div>
        <ul className="nav-links">
                <Link to="/dashboard" className='nav-childs'>Dashboard</Link>
                <a href="" className='nav-childs'>Logout</a>
            <>
                <a href="" className='nav-childs'>Dashboard</a>
            </>
        </ul>
      </nav>
  )
}

export default NavDashboard