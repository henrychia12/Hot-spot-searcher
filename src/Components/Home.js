import React, { Component } from 'react';
import logo from '../GeneralImage/city.jpg';

class Home extends Component {
    render(){
    return (
        <div className="container">
            <header className="App-header">
                <div id="content-stuff">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div id="content-over-image">
                        <h1>The world is in your hands... </h1>
                    </div>
                </div>
            </header>

        </div>
    )
}
}

export default Home;