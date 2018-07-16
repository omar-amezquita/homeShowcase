import React from 'react';
import { object } from 'prop-types';

const Propiedad = ({ data }) => (
  <h2>{data.superficie}</h2>
);

Propiedad.propTypes = {
  data: object.isRequired,
};

export default Propiedad;
