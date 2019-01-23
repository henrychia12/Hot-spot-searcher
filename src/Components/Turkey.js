import React from 'react'
import logo from '../cappadocia-img.jpg';

const Turkey = () => {
    return(
        <div className="container">
            <header className="App-header">
                <div id="content-stuff">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div id="content-over-image">
                        <h1>Türkiye'ye hoşgeldiniz</h1>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Turkey;