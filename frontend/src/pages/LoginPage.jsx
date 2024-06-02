import React from 'react'
import {BiLogInCircle} from 'react-icons/bi'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/navigation/Nav'
import { toast } from 'react-toastify';

const LoginPage = () => {

  const[formData, setFormData] = useState({
    "email": "",
    "password": "",
  });

  const { email, password } = formData

  const handleChange = (e) => {

    setFormData((prev) => ({       
        ...prev,
        [e.target.name]:e.target.value
      })
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(password === "" || email === "") {
      toast.error('There can be no empty fields');
    }
  }
  
  return (
    <>
      <Nav/>
        <div className="container auth__container">
          <h4 className="main__title">Login <BiLogInCircle /></h4>

          <form className="auth__form">
              <input type="email" placeholder="email" name="email" onChange={handleChange} value={email} required />
              <input type="password" placeholder="password" name="password" onChange={handleChange} value={password} required />
              <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Login</button>

              <Link to='/register'>You don't you have a user account? Please Register</Link>
              <Link to='/reset_password'>Forgot Your Password?</Link>
              <Link to='/'>Go Home Page</Link>
          </form>
        </div>
    </>
  )
}


export default LoginPage