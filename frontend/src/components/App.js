import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DataProvider from './DataProvider';
import PropList from './PropList';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

import './App.scss';

class App extends Component {
  state = {
    sortType: 'id',
  }

  sort = type => {
    this.setState({ sortType: type });
  }

  render() {
    return (
      <DataProvider
        endpoint="api/propiedades/"
        render={data => ([
          <Sidebar key="sidebar" callback={this.sort} />,
          <section key="container" className="container">
            <Header />
            <main>
              <PropList data={data} sort={this.state.sortType}/>
            </main>
            <Footer />
          </section>
        ])}
      >
      </DataProvider>
    );
  }
}

const wrapper = document.getElementById('app');

wrapper ? ReactDOM.render(<App />, wrapper) : null;
