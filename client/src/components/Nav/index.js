import React from "react";
import { NavLink } from 'react-router-dom';
import './style.css';

const Nav = props => {
  return (
    <div>
      <div className="navbar">
        <p></p>
        <div className="navbar-right">
          <a href="/">HOME</a>
          <NavLink 
            to="/story"
            activeClassName="active"
            >OUR STORY</NavLink>
        </div>
      </div>
      <div className="header-container">
        <a href="/" id="background"/>
        {/* <a href="/register-for-updates"><button className="reg-button">Get Updates</button></a> */}
      </div>
    </div>
  );
}

export default Nav;
