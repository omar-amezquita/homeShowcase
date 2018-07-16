import React, { Component } from 'react';
import { string, func } from 'prop-types';

class DataProvider extends Component {
  static propTypes = {
    endpoint: string.isRequired,
    render: func.isRequired,
  }

  state = {
    data: [],
    loaded: false,
    placeholder: 'loading ...',
  }

  componentDidMount() {
    fetch(this.props.endpoint)
      .then(response => {
        if (response.status !== 200) {
          return this.setState({ placeholder: 'Exploded' });
        }

        return response.json();
      })
      .then(data => this.setState({ data: data, loaded: true }));
  }

  render() {
    const { data, loaded, placeholder } = this.state;

    return loaded ? this.props.render(data) : <p>{placeholder}</p>;
  }
}

export default DataProvider;
