import React from 'react';
import { Link } from 'react-router-dom';

const EventListItem = ({ id, description, titulo }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{titulo}</h3>
    </Link>
    <p>{description}</p>
  </div>
);

export default EventListItem;
