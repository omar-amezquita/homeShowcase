import React from 'react';
import { array } from 'prop-types';

import Propiedad from './Propiedad';

const PropList = ({ data }) => data.length > 0
  ? data.map(item => (<Propiedad data={item} />))
  : (
    <h1>No hay propiedades listadas aún. Intenta de nuevo en unos momentos </h1>
  );

PropList.propTypes = {
  data: array.isRequired,
};

export default PropList;
