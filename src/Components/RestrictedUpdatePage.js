import React, { Component } from 'react';

class RestrictedUpdatePage extends Component {
      
    render() {
        return (
            <div className="App">
                <h1>User is not logged in. Can not access Update Page.</h1>
            </div>
        )
    }
}

export default RestrictedUpdatePage;