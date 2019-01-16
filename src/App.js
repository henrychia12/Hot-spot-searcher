import React, { Component } from 'react';
import logo from './waterfall.jpg';
import './App.css';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />



        </header>
      </div>
    );
  }
}

export default App;
