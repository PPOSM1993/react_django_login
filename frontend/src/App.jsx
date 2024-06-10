import { useState } from 'react'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ResetPasswordPage from './pages/ResetPassword'
import ActivatePage from './pages/ActivatePage'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/' element={<HomePage />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/reset_password' element={<ResetPasswordPage />}/>
          <Route path='/activate_page' element={<ActivatePage />}/>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
