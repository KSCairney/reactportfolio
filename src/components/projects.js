import React, { Component } from 'react';
import './projects.css';
import projList from '../data/projects.json';

class Projects extends Component {
  
  render() {
    let theTitle = projList.projects[this.props.identifier].title;
    let theLanguage = projList.projects[this.props.identifier].language;
    let theLink = projList.projects[this.props.identifier].url;
    let thePicture = require('../images/' + projList.projects[this.props.identifier].image);

    return (
      <div id="projects" className="space">
        <div className="section">Projects</div>
        <div className="row projNav">
          <div className="col-xl-3">
            <button onClick={this.props.clickLeft}>&lt; prev</button>
          </div>
          <div className="projDetails col-xl-6">
            <a href={theLink}><img src={thePicture} alt="projPic"/></a>
            <p className="projName">{theTitle}</p>
            <p className="projLanguages">{theLanguage}</p>
          </div>
          <div className="col-xl-3">
            <button onClick={this.props.clickRight}>next &gt;</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;