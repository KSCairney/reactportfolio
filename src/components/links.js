import React, { Component } from 'react';
import './links.css';

class Links extends Component {
  render() {
    return (
      <div id="links">
        <div className="section">Links</div>
        <div className="linkSet">
          <a href="https://github.com/KSCairney" className="github">GitHub</a>
          <p> | </p>
          <a href="https://www.linkedin.com/in/kscairney" className="linkedin">LinkedIn</a>
          <p> | </p>
          <a href="https://www.xing.com/profile/Kenneth_Cairney" className="xing">Xing</a>
        </div>
      </div>
    );
  }
}

export default Links;