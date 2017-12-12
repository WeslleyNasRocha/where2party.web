import React from 'react';

import Icon from 'react-icons-kit';
import { home, clipboard } from 'react-icons-kit/icomoon';

export const RelatorioPage = () => (
  <div>
    <section className="content-header">
      <h1>Homepage</h1>
      <ol className="breadcrumb">
        <li className="active">
          <Icon icon={home} /> Home
        </li>
        <li>
          <Icon icon={clipboard} /> Relatorios
        </li>
      </ol>
    </section>
    <section className="content">
      <p>RelatorioPage</p>
    </section>
  </div>
);

export default RelatorioPage;
