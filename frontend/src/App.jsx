import LoginPage from './pages/LoginPage'
//import Nav from './components/navigation/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard'
import RegisterPage from './pages/RegisterPage'
import ActivatePage from './pages/ActivatePage'
import ResetPasswordPage from './pages/ResetPasswordPage';

function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element={<HomePage />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/reset_password' element={<ResetPasswordPage />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/activate_account' element={<ActivatePage />}/>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App