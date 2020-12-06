import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./css/navbar.css"
export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark sticky-top navbar-expand-lg font">
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item font">
          <Link to="/" className="nav-link">HOME</Link>
          </li>          

          <li className="navbar-item font">
          <Link to="/about" className="nav-link">ABOUT</Link>
          </li>        


          <li className="navbar-item font">
          <Link to="/login" className="nav-link">YOUR-BLOG</Link>
          </li>
         
        </ul>

        <img src="https://i.ibb.co/6XzzZb8/mylogo.png" width="75" height="75" class="d-inline-block align-top" alt="" loading="lazy"/>
        </div>
      </nav>
    );
  }
}
