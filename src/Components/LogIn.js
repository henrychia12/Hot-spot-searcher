import React, { Component } from 'react';
import axios from 'axios';
import {hotspot_ip} from "./Constants.js";

class LogIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: null,
            password: null,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
            });
    }

    handleSubmit = () => {
        let loggedIn = false
        axios({
            method: "get",
            url: hotspot_ip + ":8080/HotSpot-Project/api/userAccount/getAllAccounts",
        })
            .then(response => {
                let userAccounts = response.data;
                for (let account = 0; account < userAccounts.length; account++) {
                    if ((this.state.username === userAccounts[account].userName) && (this.state.password === userAccounts[account].password)) {
                        sessionStorage.setItem("Account", JSON.stringify(userAccounts[account]));
                        loggedIn = true;
                        alert("Account successfully logged in.");
                        this.props.history.push("/");
                    }
                }
                if (loggedIn === false) {
                    alert("Details entered are invalid. Please try again or register a new account.");
                }
            });
    }

    render() {
        return (
            <div className="register-background">
                <div className="container-fluid bg-light py-5">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="card card-body">
                                <h3 className="text-center mb-4">Log In</h3>
                                <div className="alert alert-danger">
                                    <a className="close font-weight-light" data-dismiss="alert" href="/">×</a>Please enter all fields to register.
                </div>
                                <fieldset onSubmit={this.handleSubmit}>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleChange} placeholder="Username" name="userName" type="text" />
                                    </div>
                                    <div className="form-group has-success">
                                        <input id="password" className="form-control input-lg" onChange={this.handleChange} placeholder="Password" name="password" type="password" />
                                    </div>
                                    <input className="btn btn-lg btn-primary btn-block" onClick={this.handleSubmit} value="Log In" type="submit" />
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default LogIn;

