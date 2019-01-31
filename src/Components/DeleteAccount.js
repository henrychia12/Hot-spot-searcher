import React, { Component } from 'react';
import axios from 'axios';

class DeleteAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: null,
            password: null,
            confirmPassword: null
        }
    }

    handleUserName = event => {
        this.setState({
            userName: event.target.value
        });
        console.log(this.state.userName)
    }

    handlePassword = event => {
        this.setState({
            password: event.target.value
        });
        console.log(this.state.password)
    }

    handleConfirmPassword = event => {
        this.setState({
            confirmPassword: event.target.value
        });
        console.log(this.state.confirmPassword)
    }

    handleAccountToDelete = (userID) => {
        axios({
            method: "delete",
            url: "http://localhost:9001/HotSpot-Project/api/userAccount/deleteAccount/" + userID,
        }).then(response => {
            let deleteAccount = response.data;
            console.log(deleteAccount);
            this.props.history.push("/");
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
                if ((this.state.userName === userAccounts[account].userName) &&
                 (this.state.password === userAccounts[account].password) ) {
                    this.handleAccountToDelete(userAccounts[account].userID);
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
                                    <input className="form-control input-lg" onChange={this.handleUserName} placeholder="Username" name="username" type="text" />
                                </div>
                                <div className="form-group has-success">
                                    <input id="password" className="form-control input-lg" onChange={this.handlePassword} placeholder="Password" name="password" type="password" />
                                </div>
                                <div className="form-group has-error">
                                    <input className="form-control input-lg" onChange={this.handlePassword} placeholder="Confirm Password" name="confirm password" type="password" />
                                </div>
                                <div className="checkbox">
                                    <label className="small">
                                        <input name="terms" type="checkbox" />I confirm I wish to <a>delete my account</a>
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
