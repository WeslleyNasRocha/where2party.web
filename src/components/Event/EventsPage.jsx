import React from 'react';
import { connect } from 'react-redux';

import EventListItem from './EventListItem';

export const EventsPage = props => (
  <div>
    {props.events.length !== 0 ? (
      props.events.map(event => <EventListItem key={event.id} {...event} />)
    ) : (
      <p>sem eventos</p>
    )}
  </div>
);

const mapStateToProps = (state) => {
  console.log(state);
  return {
    events: state.events,
  };
};

export default connect(mapStateToProps)(EventsPage);
