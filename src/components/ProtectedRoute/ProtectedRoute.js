import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const ProtectedRoute = () => {
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
};

export default ProtectedRoute;
