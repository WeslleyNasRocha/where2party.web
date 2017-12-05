import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';

import WelcomePage from '../components/App/WelcomePage';
import NotFoundPage from '../components/NotFoundPage';
import EventsPage from '../components/App/EventsPage';
import AddEventPage from '../components/App/AddEventPage';
import Header from '../components/App/Header';
import RelatorioPage from '../components/App/RelatorioPage';
import LoginPage from '../components/Login/LoginPage';

const AppRouter = props => (
  <BrowserRouter>
    <div>
      <Header />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/events" component={EventsPage} />
        <Route path="/addEvent" component={AddEventPage} />
        <Route path="/report" component={RelatorioPage} />
        {/* <PrivateRoute exact path="/" component={WelcomePage} /> */}
        <Route path="/login" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (localStorage.getItem('user') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      ))
    }
  />
);

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(AppRouter);
