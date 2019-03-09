import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="navigator">
        <a href="#" className="homer">home</a>
        <p> | </p>
        <a href="#" className="projecter">projects</a>
        <p> | </p>
        <a href="#" className="bioer">bio</a>
        <p> | </p>
        <a href="#" className="linker">links</a>
        <p> | </p>
        <a href="#" className="contacter">contact</a>
      </div>
    );
  }
}

export default Nav;