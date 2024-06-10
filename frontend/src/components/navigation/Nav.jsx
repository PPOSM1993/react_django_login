import React from 'react'

const Nav = () => {
  return (
        <nav className="navbar">
            <a className="logo">Logo</a>
            <ul className="nav-links">
                    <>
                        <a className='nav-childs'>Dashboard</a>
                        <a className='nav-childs'>Logout</a>
                    </>
                    <>
                        <a className='nav-childs'>Dashboard</a>
                    </>
            </ul>
        </nav>
  )
}

export default Nav
