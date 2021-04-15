import React from 'react';
import { Redirect, Route } from 'react-router';
const PrivateRoute = ({ children, ...rest }) => {
    const currentUserInfo=JSON.parse(localStorage.getItem('userInfo'));
    return (
        <Route
      {...rest}
      render={({ location }) =>
        currentUserInfo.isSignedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;