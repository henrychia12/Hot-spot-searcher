import React from 'react';
import logo from '../asia-image.jpg';
import { Link, NavLink } from 'react-router-dom';

const Asia = () => {
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
                <button type="button" class="btn btn-outline-info">Bahrain</button>
                <button type="button" class="btn btn-outline-info">Cambodia</button>
                <button type="button" class="btn btn-outline-info">China</button>
                <button type="button" class="btn btn-outline-info">Cyprus</button>
                <button type="button" class="btn btn-outline-info">Japan</button>
                <button type="button" class="btn btn-outline-info">Kuwait</button>
                <button type="button" class="btn btn-outline-info">Malaysia</button>
                <button type="button" class="btn btn-outline-info">Nepal</button>
                <button type="button" class="btn btn-outline-info">Pakistan</button>
                <button type="button" class="btn btn-outline-info">Singapore</button>
                <button type="button" class="btn btn-outline-info">Thailand</button>
                <button type="button" class="btn btn-outline-info"><Link to="/turkey">Turkey</Link></button>
            </div>
        </div>
    )
}

export default Asia;