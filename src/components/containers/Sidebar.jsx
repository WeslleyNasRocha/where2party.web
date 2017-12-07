import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from 'react-icons-kit';
import { ticket, home, plus, clipboard } from 'react-icons-kit/icomoon'

const SideBarLink = (props) => {
  const isActive = location.pathname === props.to;
  const className = isActive ? 'active' : '';

  return (
    <li className={className}>
      <NavLink to={props.to}>
        {props.icon ? <Icon icon={props.icon} /> : ''}
        <span> {props.label}</span>
      </NavLink>
    </li>
  );
};

const SideBar = () => (
  <aside className="main-sidebar">
    <section className="sidebar">
      <div className="user-panel">
        <p>user</p>
      </div>
      <ul className="sidebar-menu tree" data-widget="tree">
        <li className="header">Navegação</li>

        <SideBarLink to="/" label="Home" icon={home} />

        <SideBarLink to="/events" label="Pagina de eventos" icon={ticket} />
        <SideBarLink to="/addEvent" label="Adicionar evento" icon={plus} />

        <SideBarLink to="/report" label="Relatorios" icon={clipboard} />
      </ul>
    </section>
  </aside>
);

export default SideBar;
