import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import EventsForm from './EventsForm';

import { startEditEvent, startRemoveEvent } from '../../actions/events';

export class EditEventPage extends Component {
  onSubmit = (event) => {
    // console.log(event);
    this.props.startEditEvent(event, this.props.evento.id);
    this.props.history.push('/events');
  };
  onRemove = () => {
    this.props.startRemoveEvent(this.props.evento);
    this.props.history.push('/events');
  };
  render() {
    return (
      <div className="col-md-10">
        <div className="box box-warning">
          <div className="box-header with-border">
            <h2 className="box-title">Editar Evento</h2>
          </div>
          <EventsForm submit={this.onSubmit} evento={this.props.evento} remove={this.onRemove} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startEditEvent: (updates, id) => dispatch(startEditEvent(updates, id)),
  startRemoveEvent: ({ id }) => dispatch(startRemoveEvent({ id })),
});

const mapStateToProps = (state, props) => ({
  evento: state.events.find(evento => evento.id === props.match.params.id),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditEventPage);
