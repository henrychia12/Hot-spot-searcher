import React, { Component } from 'react';
import logo from './city.jpg';
import './App.css';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
        <header className="App-header">

          <div id="content-stuff">
            <img src={logo} className="App-logo" alt="logo" />
            <div id="content-over-image">
              <h1>The world is in your hands... </h1>
            </div>
          </div>


        </header>
      </div>
    );
  }
}

export default App;