import React, { Component } from 'react';
import axios from 'axios';

class DeleteAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: null,
            userFullName: null,
            emailAddress: null,
            password: null
        }
    }

    handleUserName = event => {
        this.setState({
            userName: event.target.value
        });
    }

    handlePassword = event => {
        this.setState({
            password: event.target.value
        });
    }

    handleAccountToDelete = () => {
        axios({
            method: "delete",
            url: "http://localhost:9001/HotSpot-Project/api/userAccount/deleteAccount/",
        }).then(response => {
            let deleteAccount = response.data;
            console.log(deleteAccount);
        });

    }

    handleSubmit = () => {
        axios({
            method: "get",
            url: "http://localhost:9001/HotSpot-Project/api/userAccount/getAllAccounts",
        }).then(response => {
            let userAccounts = response.data;
            console.log(userAccounts);
            for (let account = 0; account < userAccounts.length; account++) {
                if ((this.state.username === userAccounts[account].userName) && (this.state.password === userAccounts[account].password)) {
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
                            <h3 className="text-center mb-4">Delete Account</h3>
                            <div className="alert alert-danger">
                                <a className="close font-weight-light" data-dismiss="alert">×</a>Please enter all fields to delete your account.
                </div>
                            <fieldset onSubmit={this.handleSubmit}>
                                <div className="form-group has-error">
                                    <input className="form-control input-lg" onChange={this.handleUsername} placeholder="Username" name="username" type="text" />
                                </div>
                                <div className="form-group has-error">
                                    <input className="form-control input-lg" onChange={this.handleFullname} placeholder="Full Name" name="fullname" type="text" />
                                </div>
                                <div className="form-group has-error">
                                    <input className="form-control input-lg" onChange={this.handleEmail} placeholder="E-mail Address" name="email" type="email" />
                                </div>
                                <div className="form-group has-success">
                                    <input id="password" className="form-control input-lg" onChange={this.handlePassword} placeholder="Password" name="password" type="password" />
                                </div>
                                <div className="checkbox">
                                    <label className="small">
                                        <input name="terms" type="checkbox" />I confirm I wish to <a>delete my account</a>
                                    </label>
                                </div>
                                <input className="btn btn-lg btn-primary btn-block" onClick={this.createAccount} value="Delete Account" type="submit" />
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
