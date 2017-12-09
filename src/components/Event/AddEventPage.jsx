import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import EventsForm from './EventsForm';
import { startAddEvent, addEvent } from '../../actions/events';

export class AddEventPage extends Component {
  onSubmit = (event) => {
    this.props.startAddEvent(event);

    this.props.history.push('/events');
  };
  render() {
    return (
      <div className="col-md-10">
        <div className="box box-success">
          <div className="box-header with-border">
            <h2 className="box-title">Add Event Page</h2>
          </div>
          <EventsForm submit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddEvent: event => dispatch(startAddEvent(event)),
});

export default connect(undefined, mapDispatchToProps)(AddEventPage);
