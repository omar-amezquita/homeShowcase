import React from 'react';
import { object } from 'prop-types';

import './Propiedad.scss';

const Propiedad = ({ data }) => (
  <article className="Propiedad">
    <img src={data.foto} />
    <div className="details">
      <span className="price-tag">{parseInt(data.precio).toLocaleString('es-mx', { style: 'currency', currency: 'MXN', useGrouping: true })}</span>
      <div className="extra-details">
        <div>{`${data.construccion} m1 de construcción`}</div>
        <div>{`${data.recamaras} ${data.recamaras > 1 ? 'recámaras' : 'recamara'}`}</div>
        <div>
          <span>No de Baños: </span>
          <span>{data.banios}</span>
        </div>
      </div>
    </div>
  </article>
);

Propiedad.propTypes = {
  data: object.isRequired,
};

export default Propiedad;
