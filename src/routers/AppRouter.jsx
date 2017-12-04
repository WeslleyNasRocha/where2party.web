import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';

import WelcomePage from '../components/App/WelcomePage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/App/Header';
import LoginPage from '../components/Login/LoginPage';

const AppRouter = props => {
  return (
    <BrowserRouter>
      <div>
        <ToastContainer />
        <Switch>
          <PrivateRoute
            exact
            path="/"
            component={WelcomePage}
          />
          <Route path="/login" component={LoginPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('user') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(AppRouter);
