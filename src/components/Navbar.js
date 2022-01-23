import React from 'react';
import '../styles/nav.css'
const Navbar = () => {
  return (
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
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
              <a href="#">Link 4</a>
              <a href="#">Link 5</a>
            </div>
        </div>
    </div>
    <div className="icon">
        <input type="text" placeholder='Search here' style={{textAlign:'center',marginRight:'10px',padding:'5px'}}/>
        <i className="fa fa-search"></i>
        <a href="#">Login</a>
    </div>
</nav>
  );
};

export default Navbar;
