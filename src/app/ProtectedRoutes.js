import React, {Component} from 'react'
import {Redirect, useLocation, Route} from "react-router-dom"

export default function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
    return (
      <Route {...rest} render={(props) => (
        isAuthenticated ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )} />
    );
  }