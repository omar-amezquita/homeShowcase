import React from 'react';
import ReactDOM from 'react-dom';
import DataProvider from './DataProvider';
import PropList from './PropList';

const App = () =>(
  <DataProvider
    endpoint="api/propiedades/"
    render={data => <PropList data={data} />}
  >
    <h1>hola</h1>
  </DataProvider>
);

const wrapper = document.getElementById('app');

wrapper ? ReactDOM.render(<App />, wrapper) : null;
