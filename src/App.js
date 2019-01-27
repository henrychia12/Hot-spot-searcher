import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import LogIn from './Components/LogIn';
import Asia from './Components/Asia';
import Turkey from './Components/Turkey';
import DeleteAccount from './Components/DeleteAccount';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={LogIn} />
          <Route path='/deleteaccount' component={DeleteAccount} />
          <Route path='/asia' component={Asia} />
          <Route path='/turkey' component={Turkey} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
