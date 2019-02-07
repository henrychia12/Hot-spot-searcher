import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: null,
            userFullName: null,
            emailAddress: null,
            password: null,
        }
    }

    createAccount = () => {
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
            });
            alert("Account successfully created."); 
            this.props.history.push("/login")
        }

    handleSubmit = event => {
        event.preventDefault();
        this.createAccount();
        console.log(this.state.userName);
    }

    handleUsername = event => {
        this.setState({
            userName: event.target.value
        });
        console.log(this.state.userName);
    }

    handleEmail = event => {
        this.setState({
            emailAddress: event.target.value
        });
        console.log(this.state.emailAddress);
    }

    handleFullname = event => {
        this.setState({
            userFullName: event.target.value
        });
        console.log(this.state.userFullName);
    }

    handlePassword = event => {
        this.setState({
            password: event.target.value
        });
        console.log(this.state.password);
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
                                    <a className="close font-weight-light" data-dismiss="alert">×</a>Please enter all fields to register.
                    </div>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleUsername} placeholder="Username" name="username" type="text" required/>
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleFullname} placeholder="Full Name" name="fullname" type="text" required/>
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleEmail} placeholder="E-mail Address (gmail.com only)" name="email" type="email" pattern=".+@gmail.com" required/>
                                    </div>
                                    <div className="form-group has-success">
                                        <input id="password" className="form-control input-lg" onChange={this.handlePassword} placeholder="Password" name="password" type="password" minLength="8" required/>
                                    </div>
                                    <div className="checkbox">
                                        <label className="small">
                                            <input name="terms" type="checkbox" required/>I have read and agree to the <a>terms & conditions</a>
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