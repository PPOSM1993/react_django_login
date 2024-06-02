import React from 'react'
import Nav from '../components/navigation/Nav'
import {BiLogInCircle} from 'react-icons/bi'


const ResetPasswordPage = () => {
  return (
    
    <>
    <Nav/>
      <div className="container auth__container">
        <h4 className="main__title">Reset Password <BiLogInCircle /></h4>
      </div>
    </>
  )
}

export default ResetPasswordPage