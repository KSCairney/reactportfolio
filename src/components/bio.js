import React, { Component } from 'react';
import './bio.css';

class Bio extends Component {
  render() {
    return (
      <div id="bio">
        <div className="section">Bio</div>
        <div className="row">
          <div className="col-xl-3">
          </div>
          <div className="bioDetails col-xl-6">
            <p>This portfolio highlights the five different cities where I have lived, from top to bottom:</p>
            <p>Los Angeles | London | Tokyo | Cork | Zibo</p>
            <p className="bioP">Originally from Los Angeles, I studied to be an archaeologist and writer. After studying abroad, I traveled the world teaching English. While traveling the world discovered a love for coding. It started with learning SQL and expanded into web development. Now, I spend my days building JavaScript apps, finding new challenges, and new projects to overcome. Presently based in Los Angeles, I eagerly await the next freelance project or employment opportunity.</p>
          </div>
          <div className="col-xl-3">
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;