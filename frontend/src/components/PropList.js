import React from 'react';
import { string, array } from 'prop-types';

import Propiedad from './Propiedad';

const PropList = ({ data, sort }) => data.length > 0
  ? data
    .sort((a,b) => {
      const v1 = typeof a[sort] === 'number' ? a[sort] : a[sort].toUpperCase;
      const v2 = typeof b[sort] === 'number' ? b[sort] : b[sort].toUpperCase;

      return v1 < v2;
    })
    .map(item => (<Propiedad key={item.id} data={item} />))
  : (
    <h1>No hay propiedades listadas aún. Intenta de nuevo en unos momentos </h1>
  );

PropList.propTypes = {
  data: array.isRequired,
  sort: string,
};

export default PropList;
