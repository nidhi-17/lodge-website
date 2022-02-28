import React from 'react';
import '../../styles/nav.css';
import { Link } from "react-router-dom";


const Navbar = () => {
  const myFunction = () => {
    var x = document.getElementById("my-links");
    if (x.style.visibility === "hidden") {
      x.style.visibility = "visible";
    }
    else {
      x.style.visibility = "hidden";
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
        <a href="javascript:void(0);" className="icon" onClick={() => myFunction()}>
          <img src={require('../../images/menu-1.png')} width="20px" alt="" />
        </a>
        <div id="my-links">
          <a href='#'><Link to='/'>Home</Link></a>
          <a href='#'><Link to='/about'>About us</Link></a>
          <a href='#'><Link to='/rooms'>Rooms</Link></a>
          <a href='#'><Link to='/contact'>Contact</Link></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
