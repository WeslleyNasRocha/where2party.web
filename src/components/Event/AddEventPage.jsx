import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import Icon from 'react-icons-kit';
import { home, plus } from 'react-icons-kit/icomoon';

import EventsForm from './EventsForm';
import { startAddEvent, addEvent } from '../../actions/events';

export class AddEventPage extends Component {
  onSubmit = (event) => {
    this.props.startAddEvent(event);

    this.props.history.push('/events');
  };
  render() {
    return (
      <div>
        <section className="content-header">
          <h1>Adicionar evento</h1>
          <ol className="breadcrumb">
            <li>
              <Link to="/">
                <Icon icon={home} /> Home
              </Link>
            </li>
            <li className="active">
              <Icon icon={plus} />Adição
            </li>
          </ol>
        </section>
        <section className="content">
          <div className="col-md-10">
            <div className="box box-success">
              <div className="box-header with-border">
                <h2 className="box-title">Add Event Page</h2>
              </div>
              <EventsForm submit={this.onSubmit} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddEvent: event => dispatch(startAddEvent(event)),
});

export default connect(undefined, mapDispatchToProps)(AddEventPage);
