import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Where 2 Party</h1>
    <nav>
      <div>
        <Link to="/">Dashboard</Link>
        <Link to="/events">Eventos</Link>
        <Link to="/addEvent">Adicionar Evento</Link>
        <Link to="/report">Relatorio</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  </header>
);

export default Header;
