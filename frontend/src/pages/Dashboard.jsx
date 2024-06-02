import React from 'react'
import NavDashboard from '../components/navigation/NavDashboard'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='container dashboard-container'>
      <Link to='/dashboard'>
        <nav className="logo">Logo</nav>
      </Link>
      <br />
      <h1>Welcome Crazy Pep </h1>
    </div>
  )
}

export default Dashboard