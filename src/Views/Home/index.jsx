import React from 'react'
import { Link } from 'react-router-dom'
import "./home.scss"
import Slider from "react-slick";
import SimpleSlider from '../../component/SimpleSlider';
import Navbar from '../../component/Navbar/Navbar';

const Home = () => {
  return (
    <div className='container'>
      <div className="navbar1">
        <div className="grouo-signIn">
          <div className="login"><Link to="/login" className='login-link'>Login</Link> </div>

          <div className="register"><Link to="/Register" className='login-link'>Register</Link></div>
        </div>
      </div>

      <div>
        <Navbar/>
      </div>

      
      {/* <SimpleSlider/> */}

    </div>
  )
}

export default Home