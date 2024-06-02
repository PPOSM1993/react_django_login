import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    
      <nav className="navbar">
        
        <div className="container">
          <Link to='/'>
            <nav className="logo">Logo</nav>
          </Link>
        </div>

      </nav>
  )
}

export default Nav
