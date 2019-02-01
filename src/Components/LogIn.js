import React, { Component } from 'react';
import axios from 'axios';

class LogIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            password: null,
        }
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleUsername = event => {
        this.setState({
            username: event.target.value
        });
    }

    handlePassword = event => {
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit = () => {
        axios({
            method: "get",
            url: "http://localhost:9001/HotSpot-Project/api/userAccount/getAllAccounts",
        }).then(response => {
            let userAccounts = response.data;
            console.log(userAccounts);
            userAccounts.forEach((a) => {
                console.log(this.state.username, a.userName);
                console.log(this.state.password, a.password);            
            });
            for (let account = 0; account < userAccounts.length; account++) {
                if ((this.state.username === userAccounts[account].userName) && (this.state.password === userAccounts[account].password)) {
                    sessionStorage.setItem("Account", JSON.stringify(userAccounts[account]));
                    console.log("user logged in");
                    this.props.history.push("/");
                }
            }
        })
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
                                <a className="close font-weight-light" data-dismiss="alert">×</a>Please enter all fields to register.
                </div>
                            <fieldset onSubmit={this.handleSubmit}>
                                <div className="form-group has-error">
                                    <input className="form-control input-lg" onChange={this.handleUsername} placeholder="Username" name="username" type="text" />
                                </div>
                                <div className="form-group has-success">
                                    <input id="password" className="form-control input-lg" onChange={this.handlePassword} placeholder="Password" name="password" type="password" />
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

