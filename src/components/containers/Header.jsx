import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Icon from 'react-icons-kit';
import { thMenuOutline, userOutline } from 'react-icons-kit/typicons';

import { startLogout, startLogin } from '../../actions/auth';

const Header = ({ startLogout }) => (
  <header className="main-header">
    <Link to="/dashboard" className="logo">
      <span className="logo-mini">
        <b>W</b>2<b>P</b>
      </span>
      <span className="logo-lg">Where 2 Party</span>
    </Link>
    <nav className="navbar navbar-static-top">
      {/* <!-- Sidebar toggle button--> */}
      <a
        style={{ height: 50 }}
        href="#"
        className="sidebar-toggle"
        data-toggle="push-menu"
        role="button"
      >
        {/* <span className="sr-only">Toggle navigation</span> */}
        <Icon icon={thMenuOutline} />
      </a>
      {/* <!-- Navbar Right Menu --> */}
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          {/* <!-- User Account Menu --> */}
          <li className="dropdown user user-menu">
            {/* <!-- Menu Toggle Button --> */}
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              {/* <!-- The user image in the navbar--> */}
              <Icon size={16} icon={userOutline} />{' '}
              {/* <!-- hidden-xs hides the username on small devices so only the image appears. --> */}
              <span className="hidden-xs">Alexander Pierce</span>
            </a>
            <ul className="dropdown-menu">
              {/* <!-- The user image in the menu --> */}
              <li className="user-header">
                <img src="http://via.placeholder.com/160x160" className="img-circle" alt="User" />

                <p>
                  Alexander Pierce - Web Developer
                  <small>Member since Nov. 2012</small>
                </p>
              </li>
              {/* <!-- Menu Body --> */}
              <li className="user-body">
                <div className="row">
                  <div className="col-xs-4 text-center">
                    <a href="#">Eventos</a>
                  </div>
                  <div className="col-xs-4 text-center">
                    <a href="#">Amigos</a>
                  </div>
                  <div className="col-xs-4 text-center">
                    <a href="#">Chat</a>
                  </div>
                </div>
                {/* <!-- /.row --> */}
              </li>
              {/* <!-- Menu Footer--> */}
              <li className="user-footer">
                <div className="pull-left">
                  <a href="#" className="btn btn-default btn-flat">
                    Perfil
                  </a>
                </div>
                <div className="pull-right">
                  <button onClick={startLogout} className="btn btn-default btn-flat">
                    Sair
                  </button>
                </div>
              </li>
            </ul>
          </li>
          {/* <!-- Control Sidebar Toggle Button --> */}
        </ul>
      </div>
    </nav>
    {/* <Link to="/">Dashboard</Link>
    <Link to="/events">Eventos</Link>
    <Link to="/addEvent">Adicionar Evento</Link>
    <Link to="/report">Relatorio</Link>
    <Link to="/login">Login</Link> */}
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
