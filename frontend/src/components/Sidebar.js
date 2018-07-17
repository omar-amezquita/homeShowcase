import React, { Component } from 'react';
import { func } from 'prop-types';

import './Sidebar.scss';

class Sidebar extends Component {
  static propTypes = {
    callback: func.isRequired,
  }

  sort = e => {
    this.props.callback(e.target.getAttribute('name'));
  }

  render() {
    return (
      <div className="sidebar">
        <strong>Ordenar por:</strong>
        <ul>
          <li name="precio" onClick={this.sort}>Precio</li>
          <li name="recamaras" onClick={this.sort}>Recámaras</li>
          <li name="construccion" onClick={this.sort}>Superficie</li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
