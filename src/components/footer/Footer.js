import React from "react";
import "./Footer.css";
import google from "../../assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
import apple from "../../assets/image.svg";
import logo from "../../assets/Landkit..svg";
import one from "../../assets/icons/Vector.svg";
import two from "../../assets/icons/Vector (2).svg";
import three from "../../assets/icons/Vector (3).svg";
import four from "../../assets/icons/Vector (4).svg";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='first-footer my-5'>
        <div className='one'>
          <h1>Get the app now!</h1>
          <p>Get your dream job without the hassle.</p>
        </div>
        <div className='two'>
          <img src={apple} alt='apple' />
          <img className='image' src={google} alt='google' />
        </div>
      </div>

      <hr />

      <div className='second-footer mt-5'>
        <div className='one'>
          <img src={logo} alt='logo' />
          <p className='text'>A better way to build.</p>
          <ul>
            <li>
              <img src={one} alt='' />
            </li>
            <li>
              <img src={two} alt='' />
            </li>
            <li>
              <img src={three} alt='' />
            </li>
            <li>
              <img src={four} alt='' />
            </li>
          </ul>
        </div>
        <div className='two'>
          <p>PRODUCTS</p>
          <ul>
            <li>Page Builder</li>
            <li>UI Kit</li>
            <li>Styleguide</li>
            <li>Documentation</li>
            <li>Changelog</li>
          </ul>
        </div>
        <div className='three'>
          <p>SERVICES</p>
          <ul>
            <li>Documentation</li>
            <li>Changelog</li>
            <li>Page Builder</li>
            <li>UI Kit</li>
          </ul>
        </div>
        <div className='four'>
          <p>CONNECT</p>
          <ul>
            <li>Page Builder</li>
            <li>UI Kit</li>
            <li>Styleguide</li>
            <li>Documentation</li>
            <li>Changelog</li>
            <li>Documentation</li>
            <li>Changelog</li>
          </ul>
        </div>
        <div className='five'>
          <p>LEGAL</p>
          <ul>
            <li>Documentation</li>
            <li>Changelog</li>
            <li>Page Builder</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
