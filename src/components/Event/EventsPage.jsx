import React from 'react';
import { connect } from 'react-redux';

import EventListItem from './EventListItem';

const EventsPage = props => (
  <div>
    {props.events.lenght}
    {props.events.lenght === 0 ? (
      <p>sem eventos</p>
    ) : (
      props.events.map(event => <EventListItem key={event.id} {...event} />)
    )}
  </div>
);

const mapStateToProps = state => ({
  events: state.events,
});

export default connect(mapStateToProps)(EventsPage);
