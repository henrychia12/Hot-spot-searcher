import React, { Component } from 'react';

class LogOut extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedInUser: JSON.parse(sessionStorage.getItem("Account")),
        }
    }

    clearSession = () => {
        sessionStorage.clear();
        alert("Account has successfully logged out.");
        this.props.history.push("/");
      }

    render() {
        return (
        <div className="register-background">
        <div className="container-fluid bg-light py-5">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card card-body">
                        <h3 className="text-center mb-4">Account Details</h3>
                        <div className="alert alert-danger">
                            <a className="close font-weight-light" data-dismiss="alert">×</a>Account details below:
            </div>
                        <fieldset onSubmit={this.handleSubmit}>
                            <div className="form-group has-error">
                            <h2>UserName:</h2>
                            </div>
                            <div className="form-group has-error"><p>{this.state.loggedInUser.userName}</p>
                            <h2>Full Name:</h2>
                            </div>
                            <div className="form-group has-error"><p>{this.state.loggedInUser.userFullName}</p>
                            <h2>Email Address:</h2>
                            </div>
                            <div className="form-group has-error"><p>{this.state.loggedInUser.emailAddress}</p>
                            </div>
                            <input className="btn btn-lg btn-primary btn-block" onClick={this.clearSession} value="Log Out" type="submit" />

                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    </div>

            )
        }
}

export default LogOut;