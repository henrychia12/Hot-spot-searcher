import React, { Component } from 'react';

class RestrictedDeletePage extends Component {

    render() {
        return (
            <div className="App">
                <h1>User is not logged in. Can not access Delete Page.</h1>
            </div>
        )
    }
}

export default RestrictedDeletePage;