import React, { Component } from 'react';

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

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }


    render() {
        return (
            <div class="container py-5">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="text-center text-white mb-4">Bootstrap 4 Login Form</h2>
                        <div class="row">
                            <div class="col-md-6 mx-auto">

                                <div class="card rounded-0">
                                    <div class="card-header">
                                        <h3 class="mb-0">Login</h3>
                                        <div class="alert alert-danger">
                                            <a class="close font-weight-light" data-dismiss="alert" href="#">×</a>Please enter your login details
                                    </div>
                                    </div>
                                    <div class="card-body">
                                        <form class="form" role="form" autocomplete="off" id="formLogin" novalidate="" method="POST">
                                            <div class="form-group">
                                                <input type="text" class="form-control form-control-lg rounded-0" placeholder="Username" name="uname1" id="uname1" required="" />
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control form-control-lg rounded-0" placeholder="Password" id="pwd1" required="" autocomplete="new-password" />
                                            </div>
                                            <div>
                                            </div>
                                            <button type="submit" class="btn btn-lg btn-primary btn-block" id="btnLogin">Login</button>
                                        </form>
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

