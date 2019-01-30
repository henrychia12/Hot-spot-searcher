import React, { Component } from 'react';
import axios from 'axios';

class LogIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            password: null
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
                    console.log("user logged in");
                    this.props.history.push("/");
                }
            }
        })
    }


    render() {
        return (
            <div className="register-background">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-6 mx-auto">
                                    <div className="card rounded-0">
                                        <div className="card-header">
                                            <h3 className="mb-0">Login</h3>
                                            <div className="alert alert-danger">
                                                <a className="close font-weight-light" data-dismiss="alert">×</a>Please enter your login details
                                    </div>
                                        </div>
                                        <div className="card-body">
                                            <form className="form" role="form" autoComplete="off" id="formLogin" noValidate="">
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-control-lg rounded-0" onChange={this.handleUsername} placeholder="Username" name="uname1" id="uname1" required />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-lg rounded-0" onChange={this.handlePassword} placeholder="Password" id="pwd1" required autoComplete="new-password" />
                                                </div>
                                                <div>
                                                </div>
                                                <button type="button" className="btn btn-lg btn-primary btn-block" onClick={this.handleSubmit} id="btnLogin">Login</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default LogIn;

