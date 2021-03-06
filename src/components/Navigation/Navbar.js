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
  const hideSidebar=()=>{
    var x = document.getElementById("my-links");
    x.style.visibility = "hidden";
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
          <img src={require('../../images/menu-1.png')} width="20px" height="20px" alt="menu" />
        </a>
        <div id="my-links">
          <a href='#'><Link to='/' onClick={()=>hideSidebar()}>Home</Link></a>
          <a href='#'><Link to='/about' onClick={()=>hideSidebar()}>About us</Link></a>
          <a href='#'><Link to='/rooms' onClick={()=>hideSidebar()}>Rooms</Link></a>
          <a href='#'><Link to='/contact' onClick={()=>hideSidebar()}>Contact</Link></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
