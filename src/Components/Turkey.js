import React, { Component } from 'react';
import logo from '../blue-mosque-img.jpg';

class Turkey extends Component {

    retrieveLocationTurkey = () => {
        axios({
            method: "post",
            url: 'http://localhost:9001/HotSpot-Project/api/userAccount/createAccount',
            data: {
                userName: this.state.userName,
                userFullName: this.state.userFullName,
                emailAddress: this.state.emailAddress,
                password: this.state.password
            }
        })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            }) 
            this.props.history.push("/login")
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