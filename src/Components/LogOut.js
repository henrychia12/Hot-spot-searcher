import React, { Component } from 'react';

class LogOut extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedInUser: JSON.parse(sessionStorage.getItem("userAccounts")),
        }
    }

    clearSession = () => {
        sessionStorage.clear();
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
                            <a className="close font-weight-light" data-dismiss="alert">×</a>Please enter all fields to update Account.
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
                                    <input name="terms" type="checkbox" />I have read and agree to <a>change my account details</a>
                                </label>
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