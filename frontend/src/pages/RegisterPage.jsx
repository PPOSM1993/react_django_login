import { useEffect, useState } from 'react'
import {BiUser} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify';
import React from 'react'
import Nav from '../components/navigation/Nav'

const RegisterPage = () => {

  const [formData, setFormData] = useState({
    "first_name": "",
    "last_name": "",
    "email": "",
    "password": "",
    "re_password": ""
  })

  const { first_name, last_name, email, password, re_password } = formData

  const handleChange = (e) => {
    setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
    })
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()


    if (password !== re_password) {
        toast.error("Passwords do not match")
    } else {
        const userData = {
            first_name,
            last_name,
            email,
            password,
            re_password
        }
        dispatch(register(userData))
    }
}

  return (
    <>
      <Nav/>
      <div className="container auth__container">
        <h2 className="main__title">Register <BiUser /></h2>
        <br />
        <br />
        <form className="auth__form">
          <input type="text" placeholder="First Name" name="first_name" onChange={handleChange} required />
          <input type="text" placeholder="Last Name" name="last_name" onChange={handleChange} required />
          <input type="email" placeholder="Email" name="email" onChange={handleChange} required />
          <input type="password" placeholder="Password" name="password" onChange={handleChange} required />
          <input type="password" placeholder="Retype Password" name="re_password" onChange={handleChange} required />

          <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Register</button>
          <hr />
          <Link to='/login'>Do you have a user account? Please Login</Link>
          <Link to='/'>Go Home Page</Link>
        </form>
      </div>
    </>
  )
}

export default RegisterPage
