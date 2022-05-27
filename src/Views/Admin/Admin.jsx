import React from 'react'
import AdminLogin from '../../component/AdminLogin/AdminLogin'
import './adminLogin.scss'

const Admin = () => {
  return (
    <div className='adminLoginContainer'>

      <div className="adminLogin-box">



        <div className="input-user">
        <div><img className='logo-login' src="login-logo.png" alt="Logo" /></div>

        <h1>Admin Login Only</h1>
        <AdminLogin />

        </div>


      </div>

    </div>
  )
}

export default Admin