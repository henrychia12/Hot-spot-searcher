import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (

      <nav class="navbar navbar-expand-lg navbar-light bg-light" >
        <a class="navbar-brand" href="#"><img src={require("../logo.jpg")} /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link"> <Link to="/home">Home</Link><span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Location
        </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item"><Link to="/antartica">Antartica</Link></a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item"><Link to="/africa">Africa</Link></a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item"><Link to="/asia">Asia</Link></a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item"><Link to="/australia">Australia</Link></a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item"><Link to="/europe">Europe</Link></a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item"><Link to="/northamerica">North America</Link></a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item"><Link to="/southamerica">South America</Link></a>

              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Members
        </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item"><Link to="/register">Register</Link></a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item"><Link to="/login">Log In</Link></a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item"><Link to="/deleteaccount">Delete Account</Link></a>
              </div>
              
            </li>

          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;