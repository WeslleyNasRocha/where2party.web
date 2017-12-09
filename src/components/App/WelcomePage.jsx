import React from 'react';
import Icon from 'react-icons-kit';
import { home } from 'react-icons-kit/icomoon';

export const WelcomePage = () => (
  <div>
    <section className="content-header">
      <h1>
        Homepage
      </h1>
      <ol className="breadcrumb">
        <li className="active">
          <Icon icon={home} /> Home
        </li>
      </ol>
    </section>
    <section className="content">
      <p>Bem vindo ao seu dashboard de eventos</p>
    </section>
  </div>
);

export default WelcomePage;
