import React, { Component } from 'react';
import axios from 'axios';
import {hotspot_ip} from "./Constants.js";

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: null,
            userFullName: null,
            emailAddress: null,
            password: null,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = event => {
        event.preventDefault();
        this.createAccount();
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
            });
    }

    createAccount = () => {
        axios({
            method: "post",
            url: hotspot_ip + ":8080/HotSpot-Project/api/userAccount/createAccount",
            data: {
                userName: this.state.userName,
                userFullName: this.state.userFullName,
                emailAddress: this.state.emailAddress,
                password: this.state.password
            }
        })
            .then(response => {
                let bannedUser = null;
                bannedUser = response.data.message
                alert(bannedUser)
            })
            .catch(function (error) {
                console.log(error);
            }); 
            this.props.history.push("/login")
        }


    render() {
        return (

            <div className="register-background">
                <div className="container-fluid bg-light py-5">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="card card-body">
                                <h3 className="text-center mb-4">Sign-up</h3>
                                <div className="alert alert-danger">
                                    <a className="close font-weight-light" data-dismiss="alert" href="/">×</a>Please enter all fields to register.
                    </div>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleUsername} placeholder="Username" name="userName" type="text" minLength="2" required/>
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleFullname} placeholder="Full Name" name="fullName" type="text" minLength="4" required/>
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleEmail} placeholder="E-mail Address (gmail.com only)" name="emailAddress" type="email" pattern=".+@gmail.com" required/>
                                    </div>
                                    <div className="form-group has-success">
                                        <input id="password" className="form-control input-lg" onChange={this.handlePassword} placeholder="Password" name="password" type="password" minLength="8" required/>
                                    </div>
                                    <div className="checkbox">
                                        <label className="small">
                                            <input name="terms" type="checkbox" required/> I have read and agree to the terms & conditions
                                        </label>
                                    </div>
                                    <input className="btn btn-lg btn-primary btn-block" value="Sign Me Up" type="submit" />

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;