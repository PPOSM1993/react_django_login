import axios from "axios"

//const BACKEND_DOMAIN = "http://127.0.0.1:8000"

const REGISTER_URL = "http://127.0.0.1:8000/api/v1/auth/users/"
const LOGIN_URL    = "http://127.0.0.1:8000/api/v1/auth/jwt/create/"
const ACTIVATE_URL = "http://127.0.0.1:8000/api/v1/auth/users/activation/"

//const REGISTER_URL = `${BACKEND_DOMAIN}/api/v1/auth/users/`
//const LOGIN_URL = `${BACKEND_DOMAIN}/api/v1/auth/jwt/create/`
//const ACTIVATE_URL = `${BACKEND_DOMAIN}/api/v1/auth/users/activation/`
//const RESET_PASSWORD_URL = `${BACKEND_DOMAIN}/api/v1/auth/users/reset_password/`
//const RESET_PASSWORD_CONFIRM_URL = `${BACKEND_DOMAIN}/api/v1/auth/users/reset_password_confirm/`
//const GET_USER_INFO = `${BACKEND_DOMAIN}/api/v1/auth/users/me/`

//Register User 
const register = async(userData) => {
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    const response = await axios.post(REGISTER_URL, userData, config)

    return response.data
}
//login user
const login = async (userData) => {
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const response = await axios.post(LOGIN_URL, userData, config)

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }

    return response.data
}

//logout
const logout = () => {
    return localStorage.removeItem("User")
}

//Activate user
const activate = async(userData) => {
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    const response = await axios.post(ACTIVATE_URL, userData, config)

    return response.data
}


const authService = { register, login, logout, activate }

export default authService