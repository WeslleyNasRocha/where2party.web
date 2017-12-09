import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import createHistory from 'history/createBrowserHistory';

import WelcomePage from '../components/App/WelcomePage';
import NotFoundPage from '../components/NotFoundPage';
import EventsPage from '../components/Event/EventsPage';
import AddEventPage from '../components/Event/AddEventPage';
import EditEvent from '../components/Event/EditEventPage';
import RelatorioPage from '../components/App/RelatorioPage';
import LoginPage from '../components/Login/LoginPage';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute exact path="/" component={LoginPage} />
        <PrivateRoute path="/dashboard" component={WelcomePage} />
        <PrivateRoute path="/events" component={EventsPage} />
        <PrivateRoute path="/addEvent" component={AddEventPage} />
        <PrivateRoute path="/edit/:id" component={EditEvent} />
        <PrivateRoute path="/report" component={RelatorioPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(AppRouter);
