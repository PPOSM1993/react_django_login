import React from 'react'
import {BiLogInCircle} from 'react-icons/bi'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Nav from '../components/navigation/Nav'
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner'
import { useDispatch, useSelector } from 'react-redux'
import { login, reset } from '../features/auth/authSlice'


const LoginPage = () => {

  const[formData, setFormData] = useState({
    "email": "",
    "password": "",
  });

  const { email, password } = formData


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  const handleChange = (e) => {

    setFormData((prev) => ({       
        ...prev,
        [e.target.name]:e.target.value
      })
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    //if(password === "" || email === "") {
    //  toast.error('There can be no empty fields');
    //} else {
      const userData = {
        email,
        password,
      }
      dispatch(login(userData))
    //}
  }

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }

    if(isSuccess || user) {
      navigate('/dashboard')
    }
    dispatch(reset())
  }, [isError, isSuccess, user, navigate, dispatch])
  
  return (
    <>
      <Nav/>
        <div className="container auth__container">
          <h4 className="main__title">Login <BiLogInCircle /></h4>
          <br />
          {isLoading && <Spinner />}
          <br />
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