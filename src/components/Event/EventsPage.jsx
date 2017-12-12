import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Icon from 'react-icons-kit';
import { home, ticket } from 'react-icons-kit/icomoon';

import EventListItem from './EventListItem';

export const EventsPage = props => (
  <div>
    <section className="content-header">
      <h1>Eventos</h1>
      <ol className="breadcrumb">
        <li>
          <Link to="/">
            <Icon icon={home} /> Home
          </Link>
        </li>
        <li className="active">
          <Icon icon={ticket} />Eventos
        </li>
      </ol>
    </section>
    <section className="content">
      {props.events.length !== 0 ? (
        props.events.map(event => <EventListItem key={event.id} {...event} />)
      ) : (
        <p>sem eventos</p>
      )}
    </section>
  </div>
);

const mapStateToProps = state => ({
  events: state.events,
});

export default connect(mapStateToProps)(EventsPage);
