import { BiUser } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'
import { register, reset } from '../features/auth/authSlice'
import Nav from '../components/navigation/Nav';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

const RegisterPage = () => {

  const[formData, setFormData] = useState({
    "first_name":"",
    "last_name":"",
    "email":"",
    "password":"",
    "re_password":"",
  });

  const { first_name, last_name, email, password, re_password } = formData

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

    if(password !== re_password) {
      //console.log('Password do not Match');
      toast.error('Password do not Match');
    } else if(first_name === "" || last_name === "" || email === "" || password === "" || re_password === "")  {
      toast.error('There is not empty fields');
    } 
    else {
      const userData = {
        first_name, 
        last_name, 
        email,
        password, 
        re_password
      }
      dispatch(register(userData))
    }

    //dispatch(reset())
  }

  useEffect(() => {
    if (isError) {
        toast.error(message)
    }

    if (isSuccess || user) {
        navigate("/")
        toast.success("An activation email has been sent to your email. Please check your email")
    }
    dispatch(reset())
  }, [isError, isSuccess, user, navigate, dispatch])



  return (
    <>
      <Nav/>
      <div className="container auth__container">
        <h2 className="main__title">Register <BiUser /> </h2>
        <br />
        {isLoading && <Spinner />}
        <br />
        <form className="auth__form">
          <input type="text" placeholder="First Name" name="first_name" onChange={handleChange} value={first_name} required />
          <input type="text" placeholder="Last Name" name="last_name" onChange={handleChange} value={last_name} required />
          <input type="email" placeholder="Email" name="email" onChange={handleChange} value={email} required />
          <input type="password" placeholder="Password" name="password" onChange={handleChange} value={password} required />
          <input type="password" placeholder="Retype Password" name="re_password" onChange={handleChange} value={re_password} required />

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
