import React from 'react';
import { object } from 'prop-types';

import './Propiedad.scss';

const Propiedad = ({ data }) => (
  <article className="Propiedad">
    <img src={data.foto} />
    <div className="details">
      <div className="col headline">
        <span>{`${data.colonia} - ${data.delegacion}`}</span>
        <span>{parseInt(data.precio).toLocaleString('es-mx', { style: 'currency', currency: 'MXN', useGrouping: true })}</span>
      </div>
      <div className="col extra-details">
        <div>
          <span>{data.calle} {data.noExterior} {data.noInterior ? `int. ${data.noInterior}` : ''}</span>
        </div>
        <div>
          <div>{data.construccion} m<sup>2</sup> construidos</div>
          <div>{`${data.recamaras} ${data.recamaras > 1 ? 'recámaras' : 'recamara'}`}</div>
          <div>
            <span>No de Baños: </span>
            <span>{data.banios}</span>
          </div>
        </div>
      </div>
    </div>
  </article>
);

Propiedad.propTypes = {
  data: object.isRequired,
};

export default Propiedad;
