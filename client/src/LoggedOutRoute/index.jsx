import React from 'react';
import { Route } from 'react-router-dom';

const LoggedOutRoute = ({
  component: Component,
  rest
}) => {
  return (
    <Route component={Component} {...rest}/>
  )
};


export default LoggedOutRoute;
