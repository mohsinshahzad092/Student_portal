import React from 'react'
import "../../Views/Home/home.scss"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div><div className="navbar-main">
    {/* LOGO */}
    <div className="logo"><img src="login-logo.png" alt="" /></div>

    {/* navbar-List  */}

    <div className="menu">
      <ul className='navbar-ul'>

        <li className="navbar-li">
          <Link to="/" className='link'>Home</Link>
        </li>

        <li className="navbar-li">
          <Link to="/courses" className='link'>Courses</Link>
        </li>

        <li className="navbar-li">
          <Link to="/courseDetail" className='link'>CourseDetail</Link>
        </li>

        <li className="navbar-li">
          <Link to="/aboutUs" className='link'>AboutUs</Link>
        </li>
      </ul>
    </div>
    {/* <div className="logo">Education</div> */}



  </div></div>
  )
}

export default Navbar