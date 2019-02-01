import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loggedInUser: JSON.parse(sessionStorage.getItem("userAccounts")),
    }
  }

  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <a className="navbar-brand" href="/"><img src={require("../logo.jpg")} /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <p className="nav-link"> <Link to="/home">Home</Link><span className="sr-only">(current)</span></p>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Location</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <p className="dropdown-item"><Link to="/antartica">Antartica</Link></p>
                <div className="dropdown-divider"></div>
                <p className="dropdown-item"><Link to="/africa">Africa</Link></p>
                <div className="dropdown-divider"></div>
                <p className="dropdown-item"><Link to="/asia">Asia</Link></p>
                <div className="dropdown-divider"></div>
                <p className="dropdown-item"><Link to="/australia">Australia</Link></p>
                <div className="dropdown-divider"></div>
                <p className="dropdown-item"><Link to="/europe">Europe</Link></p>
                <div className="dropdown-divider"></div>
                <p className="dropdown-item"><Link to="/northamerica">North America</Link></p>
                <div className="dropdown-divider"></div>
                <p className="dropdown-item"><Link to="/southamerica">South America</Link></p>

              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Members</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <p className="dropdown-item"><Link to="/register">Register</Link></p>
                <div className="dropdown-divider"></div>
                <p className="dropdown-item"> {JSON.parse(sessionStorage.getItem("Account")) ===  null   ?  <Link to="/login">Log In</Link> : <Link to="/logout">Log Out</Link>}</p>
                <div className="dropdown-divider"></div>
                <p className="dropdown-item"><Link to="/updateaccount">Update Account</Link></p>
                <div className="dropdown-divider"></div>
                <p className="dropdown-item"><Link to="/deleteaccount">Delete Account</Link></p>
              </div>

            </li>

          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;