import React, { Component } from 'react';
import './city.css';

class ParallaxCity extends Component {
  render() {
    return (
      <div>
        <div className={this.props.city}></div>
        <div className={this.props.city} id={this.props.linker}></div>
      </div>
    );
  }
}

export default ParallaxCity;