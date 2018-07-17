import React, { Component } from 'react';
import { func } from 'prop-types';

import './Sidebar.scss';

class Sidebar extends Component {
  state = {
    visible: false,
  }

  static propTypes = {
    callback: func.isRequired,
  }

  sort = e => {
    this.props.callback(e.target.getAttribute('name'));
  }

  toggle = () => {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const classes = `content ${this.state.visible && 'visible'}`;
    return (
      <div className="sidebar">
        <div className={classes}>
          <strong>Ordenar por:</strong>
          <ul>
            <li name="precio" onClick={this.sort}>Precio</li>
            <li name="recamaras" onClick={this.sort}>Recámaras</li>
            <li name="construccion" onClick={this.sort}>Superficie</li>
          </ul>
        </div>

        <div className="sidehandler" onClick={this.toggle}>
          <span>{ this.state.visible ? "\u2190" : "\u2192" }</span>
        </div>
      </div>
    );
  }
}

export default Sidebar;
