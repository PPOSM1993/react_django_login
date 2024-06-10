import React from 'react'
import Nav from '../components/navigation/Nav'
import {Link} from 'react-router-dom'
const HomePage = () => {
  return (
    <>
      <Nav />
      <div className="container home-page__container">
        <h1 className="main__title">My Bullet Journal</h1>
        <div className="home__buttons">
          <Link to="/login" className="btn btn-secondary">Login</Link>
          <Link to="/register" className="btn btn-primary">Register New User</Link>
        </div>
      </div>
    </>
  )
}

export default HomePage