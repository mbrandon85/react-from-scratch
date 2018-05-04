import React from 'react';
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  style = {
    color: '#00f'
  };
  static propTypes = {
    name: PropTypes.string
  };

  render() {
    return (
      <div style={this.style} className="greeting">
        <h1>Hello {this.props.name}!</h1>
      </div>
    );
  }
}

export default Greeting;
