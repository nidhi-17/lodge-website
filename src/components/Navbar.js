import React from 'react';
import '../styles/nav.css';

import { Button } from '@material-ui/core';
const Navbar = () => {
  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  return (
    <div>
      <nav>
        <div className="logo">
          <span>l</span>o<span>dg</span>e
        </div>
        <div className="menu">
          <div className="dropdown">
            <a href="#">Home</a>
            <div className="dropdown-content">
              <a href="#">HOTEL HOME</a>
              <a href="#">LANDING</a>
              <a href="#">VACATION RESORT</a>
              <a href="#">link 4</a>
              <a href="#">link 5</a>
            </div>
          </div>

          <div className="dropdown">
            <a href="#">Rooms</a>
            <div className="dropdown-content">
              <a href="#">Single Room</a>
              <a href="#">Double Room</a>
              <a href="#">Room list Type</a>
              <a href="#">Cart</a>
              <a href="#">My Account</a>
            </div>
          </div>

          <div className="dropdown">
            <a href="#">About us</a>
            <div className="dropdown-content">
              <a href="#">Nidhi Bangera</a>
              <a href="#">Siddharth Variya</a>
              <a href="#">link 1</a>
              <a href="#">link 2</a>
              <a href="#">link 3</a>
            </div>
          </div>

          <div className="dropdown">
            <a href="#">Contact</a>
            <div className="dropdown-content">
              <a href="#">lodgeabc@gmail.com</a>
              <a href="#">022-25881056</a>
              <a href="#">Link 3</a>
              <a href="#">Link 4</a>
              <a href="#">Link 5</a>
            </div>
          </div>
        </div>
      </nav>
      <div class="topnav">
        <div class="active"><span>l</span>o<span>dg</span>e</div>
        <div id="myLinks">
          <a href="#news">HOME</a>
          <a href="#contact">ROOMS</a>
          <a href="#about">PAGES</a>
          <a href="#about">ABOUT</a>
          <a href="#about">CONTACT</a>
        </div>
        <a href="javascript:void(0);" className="icon" onClick={()=>myFunction}>
          <img src={require('../images/menu-1.png')} width="20px" alt=""/>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
