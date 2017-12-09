import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Header from '../components/containers/Header';
import Sidebar from '../components/containers/Sidebar';

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <div className="content-wrapper">
    <Header />
    <Sidebar />
    <Route
      {...rest}
      component={props => (isAuthenticated ? <Component {...props} /> : <Redirect to="/" />)}
    />
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid,
});
export default connect(mapStateToProps)(PrivateRoute);
