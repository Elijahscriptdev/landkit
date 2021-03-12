import React from "react";
import "./Footer.css";
import google from "../../assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
import apple from "../../assets/image.svg";

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

      <div className='second-footer'>
        <div className='one'>
          <p>LOGO</p>
          <p>A better way to build.</p>
          <ul>
            <li>uu</li>
            <li>uu</li>
            <li>uu</li>
            <li>uu</li>
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
