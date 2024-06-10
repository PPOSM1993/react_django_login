import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Nav from '../components/navigation/Nav'
import { useDispatch, useSelector } from 'react-redux'

const LoginPage = () => {

  const[formData, setFormData] = useState({
    "email": "",
    "password": "",
  });

  const { email, password } = formData

  //const dispatch = useDispatch()
  //const navigate = useNavigate()

  return (
    <>
      <Nav/>
        <div className="container auth__container">
          <h4 className="main__title">Login</h4>
          <br />
          <br />
          <form className="auth__form">
              <input type="email" placeholder="email" name="email" required />
              <input type="password" placeholder="password" name="password" required />
              <button className="btn btn-primary" type="submit">Login</button>

              <Link to='/register'>You don't you have a user account? Please Register</Link>
              <Link to='/reset_password'>Forgot Your Password?</Link>
              <Link to='/'>Go Home Page</Link>
          </form>
        </div>
    </>
  )
}

export default LoginPage
