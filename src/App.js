import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import LogIn from './Components/LogIn';
import LogOut from './Components/LogOut';
import UpdateAccount from './Components/UpdateAccount';
import DeleteAccount from './Components/DeleteAccount';
import Asia from './Components/Asia';
import Turkey from './Components/Turkey';
import Japan from './Components/Japan';
import { withAlert } from 'react-alert'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {(sessionStorage.getItem("Account")) === null ? <Route exact path="/logout" component={LogIn} /> : <Route path='/logout' component={LogOut} />}
          {(sessionStorage.getItem("Account")) === null ? <Route exact path="/deleteaccount" component={LogIn} /> : <Route path='/deleteaccount' component={DeleteAccount} />}
          {(sessionStorage.getItem("Account")) === null ? <Route exact path="/updateaccount" component={LogIn} /> : <Route path='/updateaccount' component={UpdateAccount} />}
          <Route exact path="/" component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={LogIn} />
          <Route path='/asia' component={Asia} />
          <Route path='/turkey' component={Turkey} />
          <Route path='/japan' component={Japan} />

        </div>
      </BrowserRouter>
    );
  }
}

export default withAlert(App);
