import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import Icon from 'react-icons-kit';
import { home, ticket } from 'react-icons-kit/icomoon';

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
      <div>
        <section className="content-header">
          <h1>
            Editar evento:
            <small> {this.props.evento.Titulo}</small>
          </h1>
          <ol className="breadcrumb">
            <li>
              <Link to="/">
                <Icon icon={home} /> Home
              </Link>
            </li>
            <li>
              <Link to="/eventos">
                <Icon icon={ticket} /> Eventos
              </Link>
            </li>
            <li className="active">edição</li>
          </ol>
        </section>
        <section className="content">
          <div className="col-md-10">
            <div className="box box-warning">
              <div className="box-header with-border">
                <h2 className="box-title">Editar Evento</h2>
              </div>
              <EventsForm
                submit={this.onSubmit}
                evento={this.props.evento}
                remove={this.onRemove}
              />
            </div>
          </div>
        </section>
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
