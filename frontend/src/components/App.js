import React from 'react';
import ReactDOM from 'react-dom';
import DataProvider from './DataProvider';
import PropList from './PropList';

import './App.scss';

const App = () =>(
  <DataProvider
    endpoint="api/propiedades/"
    render={data => <PropList data={data} />}
  >
  </DataProvider>
);

const wrapper = document.getElementById('app');

wrapper ? ReactDOM.render(<App />, wrapper) : null;
