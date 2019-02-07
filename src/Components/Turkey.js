import React, { Component } from 'react';
import logo from '../blue-mosque-img.jpg';

class Turkey extends Component {

    render() {
        return (
            <div className="container">
                <header className="App-header">
                    <div id="content-stuff">
                        <img src={logo} className="App-logo-turkey" alt="logo" />
                        <div id="content-over-image">
                            <h1>Türkiye'ye hoşgeldiniz!</h1>
                            <br></br>
                            <h1>Welcome to Turkey!</h1>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Turkey;