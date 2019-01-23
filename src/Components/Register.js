import React from 'react'

const Register = () => {
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
                    <fieldset>
                        <div class="form-group has-error">
                            <input class="form-control input-lg" placeholder="E-mail Address" name="email" type="text"/>
                        </div>
                        <div class="form-group has-success">
                            <input class="form-control input-lg" placeholder="Password" name="password" value="" type="password"/>
                        </div>
                        <div class="form-group has-success">
                            <input class="form-control input-lg" placeholder="Confirm Password" name="password" value="" type="password"/>
                        </div>
                        <div class="form-group">
                            <select class="form-control input-lg">
                                <option selecterd="">Sequrity Question</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <input class="form-control input-lg" placeholder="Sequrity Answer" name="answer" value="" type="text"/>
                        </div>
                        <div class="checkbox">
                            <label class="small">
                                <input name="terms" type="checkbox"/>I have read and agree to the <a href="#">terms & conditions</a>
                            </label>
                        </div>
                        <input class="btn btn-lg btn-primary btn-block" value="Sign Me Up" type="submit"/>
                    </fieldset>
                </div>
        </div>
    </div>
</div>
        </div>
    );
}
                            
export default Register;