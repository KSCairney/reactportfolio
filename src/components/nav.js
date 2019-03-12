import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="navigator">
        <a href="#home" className="homer">KennethCairney</a>
        <p> | </p>
        <a href="#projects" className="projecter">projects</a>
        <p> | </p>
        <a href="#links" className="linker">links</a>
        <p> | </p>
        <a href="#bio" className="bioer">bio</a>
        <p> | </p>
        <a href="#contact" className="contacter">contact</a>
      </div>
    );
  }
}

export default Nav;