import React, { Component } from 'react';
import logo from '../GeneralImage/japan-img.jpg';
import axios from 'axios';
import {hotspot_ip} from "./Constants.js";

class Japan extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage : "Japan",
            attractions: []
        }
    }

    componentDidMount () {
        let arr = []
        axios({
            method: "get",
            url: hotspot_ip + ":8080/HotSpot-Project/api/location/getAllLocations",
        })
        .then(response => {
            let locations = response.data;
            for (let location = 0; location < locations.length; location++) {
                if (this.state.currentPage === locations[location].countryName) {
                    arr.push(response.data[location])
                   this.setState({
                       attractions: arr
                   })
                }     
            }
            console.log(this.state.attraction);
        });
    }

    render() {
        return (
            <div className="container">
                <header className="App-header">
                    <div id="content-stuff">
                        <img src={logo} className="App-logo-attraction" alt="logo" />
                        <div id="content-over-image">
                            <h1>日本へようこそ!</h1>
                            <br></br>
                            <h1>Welcome to Japan!</h1>
                        </div>
                    </div>
                    </header>
                    {(this.state.attractions.map((attraction) =>            
                    <div key={attraction.locationID}>
                    <br></br>
                        <br/> <h1>{attraction.locationName}</h1> 
                        <img src={require("../JapanImage/" + attraction.image)} className="attraction-image"/> <br></br>
                        <br/> {attraction.description}
                    </div>))}

            </div>
        )
    }
}

export default Japan;