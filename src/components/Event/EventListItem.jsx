import React from 'react';
import { Link } from 'react-router-dom';

export const EventListItem = ({
  id, Titulo, Descricao, Address, Data, Local,
}) => (
  <div>
    <div className="box box-widget widget-user">
      {/* <Link to={`/edit/${id}`}> */}
      <Link to={`/edit/${id}`}>
        <h3>{Titulo}</h3>
      </Link>
      {/* </Link> */}
      <p>Descricao: {Descricao}</p>
      <p>Data: {Data}</p>
      <p>Address: {Address}</p>
      <p>
        Local: <b>long: </b>
        {Local.longitude} <b>lat: </b>
        {Local.latitude}
      </p>
    </div>
  </div>
);

export default EventListItem;
