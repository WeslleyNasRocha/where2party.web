import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
  <div>
    <p>404!</p>
    <Link to="/">
      <button>Go Home</button>
    </Link>
  </div>
);

export default NotFoundPage;
