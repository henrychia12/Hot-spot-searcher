import React, { Component } from 'react';
import logo from '../GeneralImage/asia-image.jpg';
import { Link } from 'react-router-dom';

class Asia extends Component {
    render(){
    return (
        <div className="container">
            <header className="App-header">
                <div id="content-stuff">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div id="content-over-image-asia">
                        <h1>Enter a new world... </h1>
                        <h2>Explore the Wonders of the East </h2>
                    </div>
                </div>
            </header>
            <div>
                <button type="button" className="btn btn-outline-info">Bahrain</button>
                <button type="button" className="btn btn-outline-info">Cambodia</button>
                <button type="button" className="btn btn-outline-info">China</button>
                <button type="button" className="btn btn-outline-info">Cyprus</button>
                <button type="button" className="btn btn-outline-info"><Link to="/japan">Japan</Link></button>
                <button type="button" className="btn btn-outline-info">Kuwait</button>
                <button type="button" className="btn btn-outline-info">Malaysia</button>
                <button type="button" className="btn btn-outline-info">Nepal</button>
                <button type="button" className="btn btn-outline-info">Pakistan</button>
                <button type="button" className="btn btn-outline-info">Singapore</button>
                <button type="button" className="btn btn-outline-info">Thailand</button>
                <button type="button" className="btn btn-outline-info"><Link to="/turkey">Turkey</Link></button>
            </div>
        </div>
    )
}
}

export default Asia;