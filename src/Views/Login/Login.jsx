import React from 'react'
import "./login.scss"
import { Form, Input, Button, Checkbox } from 'antd';
import LoginInput from '../../component/AdminLogin/AdminLogin';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import UserLogin from '../../component/UserLogin/UserLogin';




const Login = () => {
  return (
    <div className='userLogin'>
      <div className='loginbtn'>

        <div className="login-Container">
          <div className="login-wrapper">
            <div className='login-bg'>


            </div>
          </div>

          <div className="login-box">
            <div><img className='logo-login' src="login-logo.png" alt="Logo" /></div>
            <h1>LOGIN TO YOUR ACCOUNT!</h1>
            {/* <LoginInput /> */}
            <UserLogin />
          </div>
        </div>


      </div>
    </div>
  )
}

export default Login