import React, { Component } from 'react';
import logo from '../turkey-hi.jpg';
import axios from 'axios';

class Turkey extends Component {

    handleSubmit = () => {
        let loggedIn = false
        axios({
            method: "get",
            url: "http://localhost:9001/HotSpot-Project/api/userAccount/getAllAccounts",
        })
        .then(response => {
            let userAccounts = response.data;
            for (let account = 0; account < userAccounts.length; account++) {
                if ((this.state.username === userAccounts[account].userName) && (this.state.password === userAccounts[account].password)) {
                    sessionStorage.setItem("Account", JSON.stringify(userAccounts[account]));
                    loggedIn = true;
                    console.log("user logged in");
                    console.log(userAccounts);
                    this.props.history.push("/");
                }     
            }
            if(loggedIn === false){
                alert("Details entered are invalid. Please try again or register a new account.");
            }
        });
    }

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