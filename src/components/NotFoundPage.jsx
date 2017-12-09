import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { pacman, confused } from 'react-icons-kit/icomoon';

export const NotFoundPage = () => (
  <div className="not-found-page">
    <section className="content">
      <div className="error-page">
        <h2 className="headline text-yellow">
          <div className="">
            <Icon icon={pacman} size={90} /> 404
          </div>
        </h2>
        <div className="error-content">
          <h3>
            Oops! Parece que a página que você procura não está aqui.{' '}
            <Icon icon={confused} size={30} />
          </h3>
          <br />
          <p>
            Voce pode procurar em outro lugar, ou{' '}
            <Link to="/dashboard">
              <b>ir para o seu dashboard</b>
            </Link>
          </p>
        </div>
        {/* <!-- /.error-content --> */}
      </div>
      {/* <!-- /.error-page --> */}
    </section>
  </div>
);

export default NotFoundPage;
