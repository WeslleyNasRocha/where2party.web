import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <div>
        <Link to="/dashboard">
          <a href="#" >Where 2 Party</a>
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
