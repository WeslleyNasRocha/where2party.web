import React, { Component } from 'react';
import EventsForm from './EventsForm';
import { connect } from 'react-redux';
import { addEvent } from '../../actions/events';

class AddEventPage extends Component {
  onSubmit = event => {
    this.props.addEvent(event);
    this.props.history.push('/');
  };
  render() {
    return (
      <div className="col-md-6">
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
  addEvent: event => dispatch(addEvent(event)),
});

export default connect(undefined, mapDispatchToProps)(AddEventPage);
