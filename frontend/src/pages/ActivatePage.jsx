import React from 'react'
import { BiUserCheck } from 'react-icons/bi'
import Nav from '../components/navigation/Nav'
const ActivatePage = () => {
  return (
    
    <div>
      <Nav/>
            <div className="container auth__container">
                <h1 className="main__title">Activate Account <BiUserCheck /> </h1>


                <button className="btn btn-accent btn-activate-account" type="submit">Activate Account</button>
            </div>
        </div>
  )
}

export default ActivatePage