import React, { Component } from 'react';
import './projects.css';
import projList from '../data/projects.json';

class Projects extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     identifier: 1
  //   }
  // }

  // prevProject = () => {
  //   if (this.state.identifier === 1) {
  //     this.setState({
  //       identifier: 10
  //     })
  //   } else {
  //     this.setState({
  //       identifier: this.state.identifier - 1
  //     })
  //   }
  // }

  // nextProject = () => {
  //   if (this.state.identifier === 5) {
  //     this.setState({
  //       identifier: 1
  //     })
  //   } else {
  //     this.setState({
  //       identifier: this.state.identifier + 1
  //     })
  //   }
  // }

  render() {
    let theTitle = projList.projects[this.props.identifier].title;

    return (
      <div className="row projNav">
      <button onClick={this.props.clickLeft}>previous</button>
      {theTitle}
      <button onClick={this.props.clickRight}>next</button>
    </div>
    );
  }
}

export default Projects;