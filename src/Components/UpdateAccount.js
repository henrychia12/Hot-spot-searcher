import React, { Component } from 'react';
import axios from 'axios';
import {hotspot_ip} from "./Constants.js";

class UpdateAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: null,
            userFullName: null,
            emailAddress: null,
            password: null,
            loggedInUser: JSON.parse(sessionStorage.getItem("Account")),
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
            });
    }

    updateAccount = () => {
        axios({
            method: "post",
            url: hotspot_ip + ":8080/HotSpot-Project/api/userAccount/updateAccount/" + this.state.loggedInUser.userID,
            data: {
                userName: this.state.userName,
                userFullName: this.state.userFullName,
                emailAddress: this.state.emailAddress,
                password: this.state.password
            }
        })
            .then(function (response) {
                alert("Account details have been successfully updated.");
            })
            .catch(function (error) {
                console.log(error);
            }) 
            this.props.history.push("/")
        }

    render() {
        return (
            <div className="register-background">
                <div className="container-fluid bg-light py-5">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="card card-body">
                                <h3 className="text-center mb-4">Update Account Details</h3>
                                <div className="alert alert-danger">
                                    <a className="close font-weight-light" data-dismiss="alert" href="/">×</a>Please enter all fields to update Account.
                    </div>
                                <form onSubmit={this.updateAccount}>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleUserName} placeholder="Username" name="userName" type="text" required/>
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleFullName} placeholder="Full Name" name="fullName" type="text" required/>
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleEmailAddress} placeholder="E-mail Address" name="emailAddress" type="email" pattern=".+@gmail.com" required/>
                                    </div>
                                    <div className="form-group has-success">
                                        <input id="password" className="form-control input-lg" onChange={this.handlePassword} placeholder="Password" name="password" type="password" minLength="8" required/>
                                    </div>
                                    <div className="checkbox">
                                        <label className="small">
                                            <input name="terms" type="checkbox" required/> I have read and agree to change my account details
                                        </label>
                                    </div>
                                    <input className="btn btn-lg btn-primary btn-block" value="Update my details" type="submit" />

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateAccount;