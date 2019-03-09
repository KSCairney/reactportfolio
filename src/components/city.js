import React, { Component } from 'react';
import './city.css';

class ParallaxCity extends Component {
  render() {
    return (
      <div className={this.props.city}></div>
    );
  }
}

export default ParallaxCity;