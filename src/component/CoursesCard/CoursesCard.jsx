import React from "react";
import Navbar from "../Navbar/Navbar";
import Card from "../Card/Card";

import "./CoursesCard.scss";

const CoursesCard = () => {
  return (
    <div className="card-Main-container">
      <div className="page-header">
        <div className="navbar2">
          <Navbar />
        </div>
        <div className="background-Section  page title">
          <div className="catagory backgroung-opacity">
            <h1>ALL CATEGORIES</h1>
          </div>
        </div>
        {/* SECTION-2 */}
        <div className="section-2">
          {/* <div className="input-search">
            <input type="search" placeholder="Search" name="Search" />
            <button>Search</button>
          </div> */}
        </div>
        {/* SECTION-3 */}
        <div className="section3">
          <div className="courses">
            <h1>COURSES</h1>
            <div className="nav-tabs">
              <ul>
                <li>Campus</li>
                <li>Web and App</li>
                <li>Design and animation</li>
                <li>Mobile Reparing</li>
                <li>Textile Designing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Card */}

      <div className="allCard-container">
        <div className="allCard">
          <Card  course ="Graphics  & Animation" />
          <Card  course ="Web and App"/>
          <Card  course ="Textile Design"/>
          <Card course ="Mobile Repading"/>
          <Card  course ="CCA or CCO"/>
          <Card course ="Block Chain"/>
          <Card course ="3D Animation"/>
          <Card course ="Game Development"/>
          <Card course ="Motion Graphics"/>
          <Card course ="Bike Mechanic"/>
          <Card course ="electrician"/>
          <Card course ="Ac Reparing"/>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
