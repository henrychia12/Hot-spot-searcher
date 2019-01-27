import React, { Component } from 'react';
import axios from 'axios';
import { withAlert } from 'react-alert';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            userFullName: "",
            emailAddress: "",
            password: "",
        }
    }

    createAccount = () => {
        axios({
            method: "post",
            url: 'http://localhost:8081/HotSpot-Project/api/userAccount/createAccount',
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
    }

    validateForm(){
        return (
            this.state.userName.length > 0 &&
            this.state.userFullName.length > 0 &&
            this.state.emailAddress.length > 0 &&
            this.state.password.length > 0
        )
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

    myClick = function () {
        alert("Hello World!");
    }
    
    render() {
        return (

            <div>
                <div class="container-fluid bg-light py-3">
                    <div class="row">
                        <div class="col-md-6 mx-auto">
                            <div class="card card-body">
                                <h3 class="text-center mb-4">Sign-up</h3>
                                <div class="alert alert-danger">
                                    <a class="close font-weight-light" data-dismiss="alert" href="#">×</a>Please enter all fields to register.
                    </div>
                                <fieldset onSubmit={this.handleSubmit}>
                                    <div class="form-group has-error">
                                        <input class="form-control input-lg" onChange={this.handleUsername} placeholder="Username" name="username" type="text" />
                                    </div>
                                    <div class="form-group has-error">
                                        <input class="form-control input-lg" onChange={this.handleFullname} placeholder="Full Name" name="fullname" type="text" />
                                    </div>
                                    <div class="form-group has-error">
                                        <input class="form-control input-lg" onChange={this.handleEmail} placeholder="E-mail Address" name="email" type="email" />
                                    </div>
                                    <div class="form-group has-success">
                                        <input id="password" class="form-control input-lg" onChange={this.handlePassword} placeholder="Password" name="password" type="password" />
                                    </div>
                                    <div class="checkbox">
                                        <label class="small">
                                            <input name="terms" type="checkbox" />I have read and agree to the <a href="#">terms & conditions</a>
                                        </label>
                                    </div>
                                    <input class="btn btn-lg btn-primary btn-block"  onClick={this.createAccount} value="Sign Me Up" type="submit"/>

                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;