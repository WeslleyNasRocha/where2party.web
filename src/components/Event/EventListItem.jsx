import React from 'react';
import { Link } from 'react-router-dom';

const EventListItem = ({
  id,
  descricao,
  address,
  titulo,
  local,
  data,
  image,
  orgId,
  createdAt,
}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{titulo}</h3>
    </Link>
    <p>{descricao}</p>
    <p>{local}</p>
    <p>{data}</p>
    <p>{image}</p>
    <p>{orgId}</p>
    <p>{createdAt}</p>
  </div>
);

export default EventListItem;
