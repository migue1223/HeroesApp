import React from 'react';
import Proptypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        !isAuthenticated ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  );
};

PublicRoute.propTypes = {
  isAuthenticated: Proptypes.bool.isRequired,
  component: Proptypes.func.isRequired,
};
