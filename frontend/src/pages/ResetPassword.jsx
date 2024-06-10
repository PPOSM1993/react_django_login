import React, { useState } from 'react'
import Nav from '../components/navigation/Nav'
import {BiLogInCircle} from 'react-icons/bi'
import { toast } from 'react-toastify';
import HomePage from './HomePage';
import {Link} from 'react-router-dom'


const ResetPasswordPage = () => {

  const [formData, setFormData] = useState({
    "email": "",
  })

  const {email} = formData

  const handleChange = (e) => {

    setFormData((prev) => ({       
        ...prev,
        [e.target.name]:e.target.value
      })
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()


    if(email === "") {
      toast.error('There can be no empty fields');
    }
  }

  //const dispatch = useDisp

  return (
    
    <>
    <Nav/>
      <div className="container auth__container">
        <h4 className="main__title">Reset Password <BiLogInCircle /></h4>

        <form className="auth__form">
          <input type="text" placeholder="email" name="email" onChange={handleChange} value={email} required />
          <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Reset Password</button>
          <Link to='/'>Go Home Page</Link>
        </form>
        
      </div>
      
    </>
  )
}

export default ResetPasswordPage