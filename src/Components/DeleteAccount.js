import React, { Component } from 'react';
import axios from 'axios';
import {hotspot_ip} from "./Constants.js";

class DeleteAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: null,
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

    clearSession = () => {
        sessionStorage.clear();
        this.props.history.push("/");
    }

    handleAccountToDelete = (id) => {
        axios({
            method: "delete",
            url:  hotspot_ip + ":8080/HotSpot-Project/api/userAccount/deleteAccount/" + id,
        }).then(response => {
            this.clearSession();
            alert("Account has been successfully deleted.");
            this.props.history.push("/");
        });

    }

    handleSubmit = () => {
        let correctDetails = false;
        axios({
            method: "get",
            url: hotspot_ip + ":8080/HotSpot-Project/api/userAccount/getAllAccounts",
        }).then(response => {
            let userAccounts = response.data;
            for (let account = 0; account < userAccounts.length; account++) {
                if ((this.state.userName === this.state.loggedInUser.userName) &&
                    (this.state.password === this.state.loggedInUser.password)) {
                    this.handleAccountToDelete(this.state.loggedInUser.userID);
                }
            }
            if (correctDetails === false) {
                alert("Details entered are invalid. Unable to delete account. Please provide correct account details to delete account.");
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
                                <h3 className="text-center mb-4">Delete Account</h3>
                                <div className="alert alert-danger">
                                    <a className="close font-weight-light" data-dismiss="alert" href="/">×</a>Please enter all fields to delete your account.
                </div>
                                <fieldset onSubmit={this.handleSubmit}>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleChange} placeholder="Username" name="userName" type="text" />
                                    </div>
                                    <div className="form-group has-success">
                                        <input id="password" className="form-control input-lg" onChange={this.handleChange} placeholder="password" name="password" type="password" />
                                    </div>
                                    <div className="checkbox">
                                        <label className="small">
                                            <input name="terms" type="checkbox" required/> I confirm I wish to delete my account
                                        </label>
                                    </div>
                                    <input className="btn btn-lg btn-primary btn-block" onClick={this.handleSubmit} value="Delete Account" type="submit" />
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteAccount;
