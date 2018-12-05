import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class ProtectedRoute extends Component {
  render() {
    let authenticated;
    if (localStorage.getItem('loggedIn') === 'true') {
      authenticated = true;
    } else {
      authenticated = false;
    }
    const { component: Component, ...props } = this.props;

    return (
      <Route
        {...props}
        render={props =>
          authenticated ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    );
  }
}

export default ProtectedRoute;
