import React from 'react'
import RegisterUi from '../RegisterUI/RegisterUi'
import "./register.scss"

const Register = () => {
  return (
    <div className='register-container'>

      <div className='r-box'>
      <div><img  className='logo-login' src="login-logo.png" alt="Logo" /></div>
        <h1>CREATE YOUR ACCOUNT AND JOIN WITH US!</h1>
      <RegisterUi/>
      </div>
      
      
      </div>
  )
}

export default Register