import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Where 2 Party</h1>
    <nav>
      <div>
        <Link to="/">
          <p>Dashboard</p>
        </Link>
        <Link to="/events">
          <p>Eventos</p>
        </Link>
        <Link to="/addEvent">
          <p>Adicionar Evento</p>
        </Link>
        <Link to="/report">
          <p>Relatorio</p>
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
