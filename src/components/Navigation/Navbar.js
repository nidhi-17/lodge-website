import React from 'react';
import '../../styles/nav.css';
import { Link } from "react-router-dom";


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
            <a href='#'><Link to='/'>Home</Link></a>
            <a href='#'><Link to='/about'>About us</Link></a>
            <a href='#'><Link to='/rooms'>Rooms</Link></a>
            <a href='#'><Link to='/contact'>Contact</Link></a>

          </div>
        </div>
      </nav>
      <div className="topnav">
        <div className="newnav"><span>l</span>o<span>dg</span>e</div>
        <div id="myLinks">
          <a href='#'><Link to='/'>Home</Link></a>
          <a href='#'><Link to='/about'>About us</Link></a>
          <a href='#'><Link to='/rooms'>Rooms</Link></a>
          <a href='#'><Link to='/contact'>Contact</Link></a>
        </div>
        <a href="#" className="icon" onClick={() => myFunction}>
          <img src={require('../../images/menu-1.png')} width="20px" alt="" />
        </a>
      </div>
      </div>
      );
};

      export default Navbar;
