import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';

import Header from '../components/containers/Header';
import Sidebar from '../components/containers/Sidebar';

import WelcomePage from '../components/App/WelcomePage';
import NotFoundPage from '../components/NotFoundPage';
import EventsPage from '../components/Event/EventsPage';
import AddEventPage from '../components/Event/AddEventPage';
import RelatorioPage from '../components/App/RelatorioPage';
import LoginPage from '../components/Login/LoginPage';

const AppRouter = props => (
  <BrowserRouter>
    <div>
      <Header />
      <Sidebar />
      <ToastContainer />
      <div className="content-wrapper">
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
