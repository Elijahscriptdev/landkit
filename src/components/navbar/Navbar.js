import React from "react";
import "./Navbar.css";
import logo from "../../assets/Landkit..svg";

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='nav-logo'>
        <ul>
          <li>
            <img src={logo} alt='' />
          </li>
        </ul>
      </div>
      <div className='nav-items'>
        <div className='nav-items-links'>
          <ul>
            <li>Landings</li>
            <li>Pages</li>
            <li>Account</li>
            <li>Documentation</li>
          </ul>
        </div>
        <div className='nav-items-links'>
          <ul>
            <li>Documentation</li>
            <li className='button'>Buy Now</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
